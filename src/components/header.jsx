import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "firebase/auth";
import { SignIn, SignOut } from "./../firebaseAuth";
import GCRFLogo from './../images/crf21-logo.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: "Google Sans",
    fontWeight: 700,
  },
  loginButton: {
    marginLeft: "auto",
    backgroundColor: "#EA4335",
    color:"#fff",
    padding: theme.spacing(1),
  },
  appBar:{
    backgroundColor: "#fff",
    color:"#EA4335",
  },
}));
export default function Header(props) {
  const [User, setUser] = useState(props.user);
  const classes = useStyles();
  useEffect(() => {
    setUser(props.user);
  });
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <div className={classes.menuButton}>
            <img alt="Google Cloud Ready Facilitator Program Logo" src={GCRFLogo} width="50px"/>
          </div>
          <Typography variant="h6" className={classes.title}>
            GoogleCloudReady Facilitator Program
          </Typography>
          <div className={classes.loginButton} color="inherit">
            {props.user ? <SignOut className={classes.loginButton} /> : <SignIn className={classes.loginButton}/>}
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ "marginTop":"10px", "paddingRight":"5%", "display":"flex","alignItems":"center", "justifyContent":"flex-end","width":"95%", "color":"#EA4335" }}>
        <AccountCircleIcon fontSize="large" /> {User ?  User.displayName : "Someone" }
        </div>
    </div>
  );
}
