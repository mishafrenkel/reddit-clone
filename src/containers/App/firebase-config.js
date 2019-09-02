import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA5zaHb_kMr3kOOL8T_MPkEc_-doLhEAo0",
  authDomain: "reddit-clone-b2036.firebaseapp.com",
  databaseURL: "https://reddit-clone-b2036.firebaseio.com",
  projectId: "reddit-clone-b2036",
  storageBucket: "",
  messagingSenderId: "617452983245",
  appId: "1:617452983245:web:ee74bb3abe3036a1"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
