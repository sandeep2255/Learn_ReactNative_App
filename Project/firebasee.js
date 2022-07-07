import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2F85JPBBpCtRw8dSgHGopYSk3UX45aEA",
  authDomain: "sbce-project.firebaseapp.com",
  databaseURL: "https://sbce-project-default-rtdb.firebaseio.com",
  projectId: "sbce-project",
  storageBucket: "sbce-project.appspot.com",
  messagingSenderId: "11704143533",
  appId: "1:11704143533:web:5ae4ad375a19643ca8c024",
  measurementId: "G-408FQSZNLC"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
export {database};