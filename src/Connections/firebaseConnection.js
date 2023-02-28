import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyClLgaeVphxk-tMGvWCqg69yDjqFaE5E8k",
  authDomain: "todo-app-a0987.firebaseapp.com",
  projectId: "todo-app-a0987",
  storageBucket: "todo-app-a0987.appspot.com",
  messagingSenderId: "619523886958",
  appId: "1:619523886958:web:86c89da8d19e5bfc047b7f",
  measurementId: "G-VN74T2Z9ZH"
};

if(!firebase.apps.length){
    const app = initializeApp(firebaseConfig);
}

export default firebase;