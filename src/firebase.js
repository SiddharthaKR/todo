import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCSVo-w4noPGBH9EJilhJQbj95j-emI2Y",
  authDomain: "to-do-40f3e.firebaseapp.com",
  databaseURL: "https://to-do-40f3e-default-rtdb.firebaseio.com",
  projectId: "to-do-40f3e",
  storageBucket: "to-do-40f3e.appspot.com",
  messagingSenderId: "1098208363732",
  appId: "1:1098208363732:web:15c22899fcb3c00cd96741",
  measurementId: "G-JD8NQXV1PR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
