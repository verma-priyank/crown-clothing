import { getByDisplayValue } from "@testing-library/react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc , collection,writeBatch ,query , getDocs} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAau4sddEpSfqJAY2eNBiE2B9gCBP36gno",
  authDomain: "crwn-cloting-db-e4691.firebaseapp.com",
  projectId: "crwn-cloting-db-e4691",
  storageBucket: "crwn-cloting-db-e4691.appspot.com",
  messagingSenderId: "863559069775",
  appId: "1:863559069775:web:900dc6f5381b987b987a3a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
//   export const signInWithGooglePopup = () =>  signInWithPopup(auth , googleprovider);

export function signInWithGooglePopup() {
  return signInWithPopup(auth, googleprovider);
}
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);

export const db = getFirestore();
// export async function createUserDocumentfromAuth(userauth){
//   const userDocRef = doc(db , "users" , userauth.uid);
//   console.log(userDocRef);
// }

  export const addCollectionAndDocument = async(collectionKey ,objectToAdd) =>{
    const collectionRef = collection(db , collectionKey)

    const batch = writeBatch(db);
    objectToAdd.forEach(object => {
      const docRef = doc(collectionRef ,object.title.toLowerCase())
      batch.set(docRef ,object);
      
    });
    await batch.commit();
    console.log("done")
  }
  export const getDocumentAndCategories = async() =>{
    const collectionRef = collection(db , 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot=>docSnapshot.data())
    // const categoryMap = querySnapshot.docs.reduce((acc,docsnapshot) =>{
    //   const {title ,items} = docsnapshot.data();
    //   acc[title.toLowerCase()] = items ;
    //   return acc ;

    // } , {});
    // return categoryMap;
  }

export const createUserDocumentfromAuth = async (
  userauth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userauth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userauth;
    const createdat = new Date();
    console.log(additionalInformation);

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdat,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userSnapshot;
};


// this hekps us to create a new user inside firestore
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

// this function helps us to authenticate the user email and passward from firestore
export const signINAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth ,callback);

export const getCurrentuser =()=>{
  return new Promise((resolve , reject)=>{
    const unsubscribe = onAuthStateChanged(auth ,
      (userauth)=>{
        unsubscribe();
        console.log(userauth)
        resolve(userauth)
      } , reject)
  })
}