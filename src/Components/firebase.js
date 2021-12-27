// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAA_TtQVN4jah5XK0uI84mkrNP1PR7jPSU",

  authDomain: "findwaldo-pettle.firebaseapp.com",

  projectId: "findwaldo-pettle",

  storageBucket: "findwaldo-pettle.appspot.com",

  messagingSenderId: "767863907993",

  appId: "1:767863907993:web:75770799a230185f72fa08",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "hiscore");

const info = () => {
  onSnapshot(colRef, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log({ ...doc.data(), id: doc.id });
    });
  });
};

export default info;
export { app };
