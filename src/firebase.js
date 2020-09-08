import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyC1WAlANRx1e9oVNmTk8btgf-6HUMCdpsw",
  authDomain: "sergi-react-slack.firebaseapp.com",
  databaseURL: "https://sergi-react-slack.firebaseio.com",
  projectId: "sergi-react-slack",
  storageBucket: "sergi-react-slack.appspot.com",
  messagingSenderId: "910190693407",
  appId: "1:910190693407:web:40c39da2a867c9ce72192a",
  measurementId: "G-L07THDSWY4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
