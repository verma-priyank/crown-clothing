import { all, call, put, takeLatest } from "redux-saga/effects";
import { getDocumentAndCategories } from "../../utils/firebase/firebase.utils";
import {
  fetchcategoriesSuccess,
  fetchcategoriesFailed,
} from "./category.action";
import { USER_ACTION_TYPE } from "./category.types";

export function* fetchcategoriesAsync() {
  try {
    const categoriesArray = yield call(getDocumentAndCategories);
    console.log(categoriesArray);
    yield put(fetchcategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchcategoriesFailed(error));
  }
}
export function* onfetchCategory(){
    yield takeLatest(USER_ACTION_TYPE.SET_CATEGORY_START , fetchcategoriesAsync)
}
export function* categoriesSaga(){
    yield all([call(onfetchCategory)])
}
