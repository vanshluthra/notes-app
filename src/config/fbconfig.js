import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCcY4wDkQxEtLc0M7UOuL5fupitpOTgWBE",
  authDomain: "notes-abd97.firebaseapp.com",
  databaseURL: "https://notes-abd97.firebaseio.com",
  projectId: "notes-abd97",
  storageBucket: "notes-abd97.appspot.com",
  messagingSenderId: "372638279329",
  appId: "1:372638279329:web:e42fdd78c731e767b2b2e0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;


