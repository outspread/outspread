import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../footer/footer";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import webDevelopnment from "../../images/web_developnment.png";
import webDesign from "../../images/web_design.png";
import wireFrame from "../../images/wire_frame.gif";
import businessModel from "../../images/business_model.png";
import marketResearch from "../../images/marketing_research.jpg";
import "./Aboutus.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const Aboutus = () => {
  const classes = useStyles();
  return (
    <div className="aboutus-main-container">
      <Navbar />
      <div className={classes.root} id="main">
        <Grid container>
          <Grid container className="why-cointainer">
            <Grid item xs={12} md={8}>
              <div className="text-container">
                <p>
                  At<strong> OUTSPREAD </strong>we believe all starting
                  businesses should take their part in the ever-growing
                  rapidly-expanding web. We are here to hear from you on what
                  exactly you want and further help you in choosing the best
                  website and services which suits your model of business or
                  personal use.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="img-container">
                <img
                  src="https://static-exp2.licdn.com/sc/h/1hbr6t0oqhf2avswaaruivxtl"
                  alt="people"
                ></img>
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <div className="mission-container">
              <h2>OUR MISSION</h2>
              <p>
                To empower Individuals and Businesses with the power of
                Internert.{" "}
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="tech-container">
              <h2>Technologies we use</h2>
              <div className="tech-img-container">
                <div>
                  <h3>Web Design</h3>
                  <img src={webDesign} alt="Web Design"></img>
                </div>

                <div>
                  <h3>Web Developnment</h3>
                  <img src={webDevelopnment} alt="Web Developnment"></img>
                </div>

                <div>
                  <h3>Wireframe</h3>
                  <img src={wireFrame} alt="Wireframe"></img>
                </div>

                <div>
                  <h3>Business Model</h3>
                  <img src={businessModel} alt="Business Model"></img>
                </div>

                <div>
                  <h3>Market Research</h3>
                  <img src={marketResearch} alt="Market Research"></img>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="contactus-container">
              <h2>Take your presence to the internet Generation</h2>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <Footer />
    </div>
  );
};

export default Aboutus;
