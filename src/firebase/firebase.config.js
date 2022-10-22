// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmsf4HEzZkUW4s2l0XeKiP_aW97IUJI9I",
  authDomain: "news-sunshine-client.firebaseapp.com",
  projectId: "news-sunshine-client",
  storageBucket: "news-sunshine-client.appspot.com",
  messagingSenderId: "193733597049",
  appId: "1:193733597049:web:0559f25e82d2d217d5c1a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
