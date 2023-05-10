import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyALqWNNhPcPgHAKRg3MAcFoeWZiWaVqFHs",
  authDomain: "voicegpt-7722c.firebaseapp.com",
  projectId: "voicegpt-7722c",
  storageBucket: "voicegpt-7722c.appspot.com",
  messagingSenderId: "446880756499",
  appId: "1:446880756499:web:ddf3f43352807b155720e6",
  measurementId: "G-WG1WCQTXB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const collectionRef = collection(db, "waitlist");