// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTLp4msFXEFILmejPPzOWqyMRTEhKG0EE",
  authDomain: "travel-guru-63712.firebaseapp.com",
  projectId: "travel-guru-63712",
  storageBucket: "travel-guru-63712.appspot.com",
  messagingSenderId: "701472107639",
  appId: "1:701472107639:web:a3dc84ea25cda1830bea72"
  // apiKey:import.meta.env.VITE_APIKEY,
  // authDomain:import.meta.env.VITE_AUTHDOMAIN,
  // projectId:import.meta.env.VITE_PROJECTID,
  // storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  // appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;