import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "./footer.css";
import CompanyImg from "../../images/company.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginTop: "30px" }}>
      <Grid
        container
        spacing={1}
        justify="center"
        style={{ textAlign: "center" }}
      >
        <Grid item xs={12} sm={3}>
          {/* <Paper className={classes.paper}> */}
          <h2 style={{ color: "Black" }}>Company</h2> <br />
          <img src={CompanyImg} alt="" />
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* <Paper className={classes.paper}> */}
          <h2 style={{ color: "Black" }}>Features</h2> <br />
          <Link to="/business" style={{ color: "black", fontSize: "20px" }}>
            > Business development
          </Link>{" "}
          <br />
          <Link to="/personal" style={{ color: "black", fontSize: "20px" }}>
            > Personal development
          </Link>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* <Paper className={classes.paper}> */}
          <h2 style={{ color: "Black" }}>Contact</h2> <br />
          <div className="footer-contact">
            Email: email@outspread.in <br />
            Ph: +91-0000000000 <br />
          </div>
          <h2 style={{ color: "Black", marginTop: "20px" }}>Legal</h2>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}
