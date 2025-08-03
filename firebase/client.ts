import { initializeApp , getApp , getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmcjSFo8QYqftmllgxP433ibyJrgfDvWU",
  authDomain: "prepwise-41b7f.firebaseapp.com",
  projectId: "prepwise-41b7f",
  storageBucket: "prepwise-41b7f.firebasestorage.app",
  messagingSenderId: "1020194353764",
  appId: "1:1020194353764:web:ce8097a4896fc526e4a571",
  measurementId: "G-BZZSZ13WYL"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)