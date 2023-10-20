// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdVNSRqGqoOnIKPIpzKuPELgxUNC2J1Zo",
  authDomain: "assignment-10-6dc21.firebaseapp.com",
  projectId: "assignment-10-6dc21",
  storageBucket: "assignment-10-6dc21.appspot.com",
  messagingSenderId: "734915588020",
  appId: "1:734915588020:web:3684003b986666b6060ce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;