// Library
import * as firebase from 'firebase';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAuRZsgoKP3QrQEYLPEfgSISe4iBQjpm_M",
  authDomain: "final-2205nh.firebaseapp.com",
  databaseURL: "https://final-2205nh.firebaseio.com",
  projectId: "final-2205nh",
  storageBucket: "final-2205nh.appspot.com",
  messagingSenderId: "546201573343"
};


export const firebaseData = firebase.initializeApp(config);
