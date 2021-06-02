import React from "react";
import "./App.css";
import Form from "./components/form";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import Header from "./components/header";
import { useAuthState } from "react-firebase-hooks/auth";
import About from "./components/about";
import GCRLogo from "./images/crf21-main-logo.png";

const auth = firebase.auth();
const analytics = firebase.analytics();


export default function App() {
  const [userAuth] = useAuthState(auth);

  return (
    <div className="App">
      <Header user={userAuth} />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "30px 0",
        }}>
        <img alt="Google Cloud Ready Facilitator Program Logo" src={GCRLogo} width="30%" height="auto" />
      </div>
      <section>{userAuth ? <Form /> : <About />}</section>
    </div>
  );
}
