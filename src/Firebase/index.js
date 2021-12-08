import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyA8Eut11cS71yUUzQjN4AoGmEOI7t0zJfM",
    authDomain: "conde-eccomerce.firebaseapp.com",
    projectId: "conde-eccomerce",
    storageBucket: "conde-eccomerce.appspot.com",
    messagingSenderId: "785666852545",
    appId: "1:785666852545:web:0edd2fd99ddf378d483640"
  };
  
  const app = initializeApp(firebaseConfig);

  export const getFirebase = () => app;
  
  export { getFirestore };
  