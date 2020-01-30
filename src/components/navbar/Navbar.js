import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./sidebar";

import "./Navbar.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="https://material-ui.com/">
        OutSpread
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        id="appbar"
        position="static"
        elevation={0}
        className={classes.appBar}
        style={{ backgroundColor: "black" }}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            id="title"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
            style={{ fontSize: "35px", fontFamily: "Crete Round" }}
          >
            <Sidebar id="sidebar" />
            <Link
              variant="text"
              to="/"
              style={{ color: "white", fontSize: "30px" }}
            >
              OutSpread
            </Link>
          </Typography>

          <nav id="nav">
            <Link
              variant="button"
              color="textPrimary"
              to="/"
              className={classes.link}
              style={{ color: "white", textTransform: "uppercase" }}
            >
              home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="/business"
              className={classes.link}
              style={{ color: "white", textTransform: "uppercase" }}
            >
              Business
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="/personal"
              className={classes.link}
              style={{ color: "white", textTransform: "uppercase" }}
            >
              Personal
            </Link>

            <Link
              variant="button"
              color="textPrimary"
              to="/contact"
              className={classes.link}
              style={{ color: "white", textTransform: "uppercase" }}
            >
              About us
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
