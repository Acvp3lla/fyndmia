import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {};

const app = firebase.initializeApp(config);

const auth = app.auth();
const db = app.firestore();

export { db, auth };
