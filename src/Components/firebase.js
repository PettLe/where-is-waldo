// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  serverTimestamp,
  Timestamp,
} from "@firebase/firestore";

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

const info = () => {
  const colRef = collection(db, "hiscore");
  onSnapshot(colRef, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log({ ...doc.data(), id: doc.id });
    });
  });
};
serverTimestamp();

const getCoordinates = () => {
  const coordinates = [];
  const colRef = collection(db, "coordinates");
  onSnapshot(colRef, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      coordinates.push({ ...doc.data(), id: doc.id });
    });
  });
  return coordinates;
};

//Get a server timestamp in seconds
const time = () => {
  // const timeStart = new Date(Timestamp.now().seconds * 1000); Original
  const time = Timestamp.now().seconds * 1000;
  return parseInt(time);
};

export { info, time, getCoordinates };
export { app };
