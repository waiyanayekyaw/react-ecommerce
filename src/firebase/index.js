import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB2PTGIeW2GAlaV2FqtDoLiwjuUHWM593U",
    authDomain: "ecommerce-app-1ad3f.firebaseapp.com",
    projectId: "ecommerce-app-1ad3f",
    storageBucket: "ecommerce-app-1ad3f.appspot.com",
    messagingSenderId: "189671670031",
    appId: "1:189671670031:web:63fd99a971312663283e7a",
    measurementId: "G-ZCT5LHNM81",
};

const app = initializeApp(firebaseConfig);
let db = getFirestore(app);
let auth = getAuth(app);

export { db, auth };
