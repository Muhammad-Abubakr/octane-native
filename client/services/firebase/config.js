import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// config
const firebaseConfig = {
    apiKey: "AIzaSyCwsIr1lPcEIZspN-V0AKlMVZ7mbmD7Bj0",
    authDomain: "octane-mad.firebaseapp.com",
    projectId: "octane-mad",
    storageBucket: "octane-mad.appspot.com",
    messagingSenderId: "857586600632",
    appId: "1:857586600632:web:e658a0f23532862ea9824d"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);