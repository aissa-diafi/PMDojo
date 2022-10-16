import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjMKQuy_ER6kqWAuYnCiF8KwbyW5J0Jlg",
  authDomain: "thepmdojo.firebaseapp.com",
  projectId: "thepmdojo",
  storageBucket: "thepmdojo.appspot.com",
  messagingSenderId: "187817322802",
  appId: "1:187817322802:web:facd90b06a9da5f06b8f2b",
  measurementId: "G-5B712FP6GW",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
