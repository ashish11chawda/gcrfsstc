import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import LinkIcon from "@material-ui/icons/Link";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
// import About from './about';
import axios from 'axios';
import PrintStatus from './progressStatus';
require('dotenv').config();
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(1.8),
  },
  margin: {
    margin: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center"
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
  inputIcon: {
    marginRight: theme.spacing(1),
  },
  containerGrid: {
    margin: theme.spacing(5),
  },
}));

function FindStatusbyURL() {
  var queryURL = document.querySelector("#public-url").value;
    const apiUrl = `${process.env.REACT_APP_MONGODB_API_URL}${queryURL}`;
    axios.get(apiUrl).then((res) => {
      let user = res.data;
      if(user.length === 1){
        PrintStatus(user);
      }
      else{
        alert("Enter valid Public Profile URL or you're not registered under SSTC, Bhilai");
      }
    });
}

function FindStatusbyEmail() {
  var queryEmail = document.querySelector("#user-email").value;
    const apiUrl = `${process.env.REACT_APP_MONGODB_API_EMAIL}${queryEmail}`;
    axios.get(apiUrl).then((res) => {
      let user = res.data;
      if(user.length === 1){
        PrintStatus(user);
      }
      else{
        alert("Enter valid Email or you're not registered under SSTC, Bhilai");
      }
    });
}
function Form() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.form}>
        <div className={classes.margin}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
            id="public-url"
            width="100%"
            label="Public Profile URL"
            variant="outlined"
          />

          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            startIcon={<FindInPageIcon />}
            onClick={FindStatusbyURL}>
            Check Status with URL
          </Button>
        </div>
        <div className={classes.margin}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            id="user-email"
            width="100%"
            label="Registered Email"
            variant="outlined"
          />
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            startIcon={<FindInPageIcon />}
            onClick={FindStatusbyEmail}>
            Check Status with Email
          </Button>
        </div>
      </div>
      <div id="status-div"></div>
    </>
  );
}


export default Form;
