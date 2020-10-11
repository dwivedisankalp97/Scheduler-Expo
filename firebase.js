import * as firebase from 'firebase';
import 'firebase/auth';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDHuEP72NYYa8wDqh_4PeJ7s-NraLcytwI",
    authDomain: "schedular-react.firebaseapp.com",
    databaseURL: "https://schedular-react.firebaseio.com",
    projectId: "schedular-react",
    storageBucket: "schedular-react.appspot.com",
    messagingSenderId: "90504767216",
    appId: "1:90504767216:web:fdf4536b44a0fa40690435",
    measurementId: "G-6LCMMW7HSP"
  };
firebase.initializeApp(firebaseConfig);

export { firebase };