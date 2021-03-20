import { fireAuth } from "./fireAuth";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-database";
import "firebase/database";
import "firebase/firestore";

const app = firebase.initializeApp(fireAuth);

export const firestore = app.firestore();
export const auth = app.auth();
export const db = app.database().ref();
