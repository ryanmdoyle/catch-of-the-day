import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API,
  authDomain: `catch-of-the-day-doylecodes.firebaseapp.com`,
  databaseURL: `https://catch-of-the-day-doylecodes.firebaseio.com`
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;