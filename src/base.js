import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBnvtdJneeGqODoHT8NfvhMoNTVSk2RPoU",
  authDomain: "catch-of-the-day-doyle.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-doyle.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;