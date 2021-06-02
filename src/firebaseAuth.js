import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
require('dotenv').config();
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

const auth = firebase.auth();
const analytics = firebase.analytics();

const useStyles = makeStyles((theme) => ({
  button:{
    backgroundColor: "transparent",
    border: "none",
    color: "#ffffff",
  },
}));


export function SignIn() {
  const classes = useStyles();
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
      .then((result) => {
        const apiUrl = `${process.env.REACT_APP_MONGODB_API_EMAIL}${result.user.email}`;
    axios.get(apiUrl).then((res) => {
      let user = res.data;
      if(user.length === 1){
      }
      else{
        alert("Log in with your registered Email or you're not registered under SSTC, Bhilai");
        auth.signOut();
      }
    });
      }).catch((error) => {
      });
    };
  
    return (
      <>
        <button className={classes.button} onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </>
    );
  }
  
 export function SignOut() {
  const classes = useStyles();
    return (
      auth.currentUser && (
        <button className={classes.button} onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )
    );
  }