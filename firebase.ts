import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import App from "./pages/_app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApd4ORXZ-nAISC3bI9dkV4NzOPQJsG8pM",
  authDomain: "netflix-clone-c44a2.firebaseapp.com",
  projectId: "netflix-clone-c44a2",
  storageBucket: "netflix-clone-c44a2.appspot.com",
  messagingSenderId: "762626357619",
  appId: "1:762626357619:web:be6a54dd6e4e364aeaed06"
};

// Initialize Firebase
const app =!getApps().length? initializeApp(firebaseConfig):getApp();
const db=getFirestore()
const auth=getAuth();

export default App
export {db,auth}