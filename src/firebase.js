// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "enter your api key",
  authDomain: "enter your auth domain",
  projectId: "enter your project id",
  storageBucket: "enter your storage bucket",
  messagingSenderId: "enter your messaging sender id",
  appId: "enter your app id",
  measurementId: "enter your measurement id",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db
