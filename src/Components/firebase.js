// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  orderBy,
  limit,
  query,
  addDoc,
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

const getHiscores = () => {
  const hiScores = [];
  const colRef = collection(db, "hiscore");
  const q = query(colRef, orderBy("score", "asc"), limit(10));
  onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      hiScores.push({ ...doc.data(), id: doc.id });
    });
  });
  return hiScores;
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

const addScore = (playerScore) => {
  //const scoreBoard = document.querySelectorAll("singleScore");
  //for (let i = 0; i < scoreBoard.length; i++) {
  //  console.log(scoreBoard);
  //  console.log(scoreBoard[i]);
  //  scoreBoard[i].innerHTML = "";
  //}
  const scoreBoard = document.getElementById("fixthis");
  scoreBoard.innerHTML = "";
  let playerName = prompt(
    "Thanks for playing! Give your name and check if you made it to hiScores!"
  );

  const colRef = collection(db, "hiscore");
  addDoc(colRef, { name: playerName, score: playerScore });
  console.log("playerScore is " + playerScore);
};

export { getHiscores, time, getCoordinates, addScore };
export { app };
