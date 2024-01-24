import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "REDACTED_FIREBASE_API_KEY",
    authDomain: "neuroimage-insight.firebaseapp.com",
    projectId: "neuroimage-insight",
    storageBucket: "neuroimage-insight.appspot.com",
    messagingSenderId: "1082987401295",
    appId: "1:1082987401295:web:5d61e046489815a88f5a3a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const db_storage = getStorage(app);

export { db, db_storage };