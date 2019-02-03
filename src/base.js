import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: `AIzaSyCorQNVs8R7rpJEmStMf_Gfgv6CFfsxrrM`,
  authDomain: `catch-of-the-day-doylecodes.firebaseapp.com`,
  databaseURL: `https://catch-of-the-day-doylecodes.firebaseio.com`
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;