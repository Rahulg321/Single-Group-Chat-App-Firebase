// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYyDIPzPSDzhZw3WE_OY46CSn9NFSEQ6k",
  authDomain: "singlegroupchatapp.firebaseapp.com",
  projectId: "singlegroupchatapp",
  storageBucket: "singlegroupchatapp.appspot.com",
  messagingSenderId: "664296031685",
  appId: "1:664296031685:web:671bcd75e5979c40ae77ac",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
