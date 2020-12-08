import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

// we need to seed the database

// config
const config = {
  apiKey: "AIzaSyBB71eFR0Ipjfi4fme6UKhffS4ecXp1GTw",
  authDomain: "netflix-5adf9.firebaseapp.com",
  projectId: "netflix-5adf9",
  storageBucket: "netflix-5adf9.appspot.com",
  messagingSenderId: "938049885700",
  appId: "1:938049885700:web:37a507e44757f936b40751",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
