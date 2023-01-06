import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  signInSuccess,
  signInFailed,
  SignUpsuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
} from "./user.action";
import {
  getCurrentuser,
  createUserDocumentfromAuth,
  signInWithGooglePopup,
  signINAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import { USER_ACTION_TYPE } from "./user.types";
export function* getSnapshotfromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapShot = yield call(
      createUserDocumentfromAuth,
      userAuth,
      additionalDetails
    );
    console.log(userSnapShot);
    console.log(userSnapShot.data());
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  console.log("worked or not");
  try {
    const userAuth = yield call(getCurrentuser);
   
    if (!userAuth) return;
    yield call(getSnapshotfromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* SignInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);

    yield call(getSnapshotfromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* SignInWithEmail({ payload: { email, passward } }) {
  try {
    const { user } = yield call(
      signINAuthUserWithEmailAndPassword,
      email,
      passward
    );
  
    yield call(getSnapshotfromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, passward, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      passward
    );
   console.log(user)
    yield put(SignUpsuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* SignInAfterSignUp({ payload: { user, additionalDetails } }) {
  console.log(user);
  yield call(getSnapshotfromUserAuth, user, additionalDetails);
}
export function* SignOut() {
  try {
    yield call(signOutUser);

    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* onGooglesignInStart() {
  yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, SignInWithGoogle);
}
export function* okCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* onEmailsignInStart() {
  yield takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, SignInWithEmail);
}
export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUp);
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, SignInAfterSignUp);
}
export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_OUT_START, SignOut);
}

export function* userSaga() {
  yield all([
    call(okCheckUserSession),
    call(onGooglesignInStart),
    call(onEmailsignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
