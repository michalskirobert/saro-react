import { auth } from "./auth";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-database";
import "firebase/database";
import "firebase/firestore";

const app = firebase.initializeApp(auth);

export const firestore = app.firestore();
