import { initializeApp } from "firebase/app";

const appConfig = {
  apiKey: "AIzaSyA_ceqtifwZfGJFWwG_JrITyF7rNVWEi3Q",
  authDomain: "binged-bad03.firebaseapp.com",
  databaseURL: "https://binged-bad03-default-rtdb.firebaseio.com",
  projectId: "binged-bad03",
  storageBucket: "binged-bad03.appspot.com",
  messagingSenderId: "606210170840",
  appId: "1:606210170840:web:a34f37b1f3c68051f79cad",
};

const firebaseApp = initializeApp(appConfig);
export default firebaseApp;
