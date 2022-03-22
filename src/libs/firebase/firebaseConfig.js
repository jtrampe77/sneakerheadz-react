// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
  databaseURL: process.env.REACT_APP_DATABASE_URL ,
  projectId: process.env.REACT_APP_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_APP_ID 
};
 

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)
const storage = getStorage(app)
// export the service objects
export {db, auth, storage}
