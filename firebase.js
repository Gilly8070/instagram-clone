import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCthfmdh0EvfmEUbGvQsZiNl-xqTZF__es",
    authDomain: "instagram-clone-f2afe.firebaseapp.com",
    projectId: "instagram-clone-f2afe",
    storageBucket: "instagram-clone-f2afe.appspot.com",
    messagingSenderId: "185981778525",
    appId: "1:185981778525:web:2919b8bbfc2cd57dd5abb4",
    measurementId: "G-VKLZ4038ZD"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };