import Rebase from "re-base";
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC0tlNmCGS27TiITwFgTKNmzQhc7gKEgZU",
  authDomain: "catch-of-the-day-juanfrc.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-juanfrc.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;