import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqH2qj3wMXr8GdS74W_1eHbiqOYkPdLNA",
  authDomain: "salesmall-survey.firebaseapp.com",
  projectId: "salesmall-survey",
  storageBucket: "salesmall-survey.appspot.com",
  messagingSenderId: "937091243060",
  appId: "1:937091243060:web:b00a103dbaca82b678be61",
  measurementId: "G-5YPL3SLJV7"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);