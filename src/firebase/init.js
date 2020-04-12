import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBhq_nIYhsRGOzXPcZxd7olwGFWWfFaGx4",
  authDomain: "geo-ninja-chat-app.firebaseapp.com",
  databaseURL: "https://geo-ninja-chat-app.firebaseio.com",
  projectId: "geo-ninja-chat-app",
  storageBucket: "geo-ninja-chat-app.appspot.com",
  messagingSenderId: "528901722898",
  appId: "1:528901722898:web:dac3f90ab99064f74759cb"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
