import React from "react";
import "./App.css";
import Form from "./components/form";
import firebase from "firebase/app";
// import "firebase/auth";
import "firebase/analytics";
import Header from "./components/header";
// import { useAuthState } from "react-firebase-hooks/auth";
import About from "./components/about";
import GCRLogo from "./images/crf21-main-logo.png";

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
// const auth = firebase.auth();
const analytics = firebase.analytics();


export default function App() {
  // const [userAuth] = useAuthState(auth);

  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "30px 0",
          marginTop: "90px"
        }}>
        <img alt="Google Cloud Ready Facilitator Program Logo" src={GCRLogo} width="30%" height="auto" />
      </div>
      <section><Form /></section>
      <About/>
    </div>
  );
}
