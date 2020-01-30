import React from "react";
import Footer from "../footer/footer";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import SpaceImage from "../../images/spaceFinal.png";
import businessWebsiteimage from "../../images/businessWebsite.png";
import analyticsWebsiteimage from "../../images/analytics.jpg";
import researchPageimage from "../../images/research.jpg";
import businessGrowth from "../../images/businessGrowth.png";
import "./Feature.css";
import Navbar from "../navbar/Navbar";

export default function Feature() {
  return (
    <div>
      <Navbar />
      <div className="tops">
        <div class="feature-tag">
          <h1>Accelerate your business growth.</h1>
          <p>
            {" "}
            <strong style={{ color: "blue" }}>
              {" "}
              Research. Analyse. Build.
            </strong>{" "}
            <br />
            Are you a Statup or a small business looking <br /> to expand?{" "}
            <br />
            We provide solutions that will be well suited <br /> for your
            business to reach the highest level.
          </p>
        </div>
      </div>
      {/* <div className="header-mobile">
                <h1>Accelerate your business growth.</h1>
                <p>Research. Analyse. Build</p>
            </div> */}
      <div className="mid" id="mn">
        <p
          style={{ textAlign: "center", paddingTop: "20px", fontSize: "30px" }}
        >
          We Offer
        </p>
        <div className="services-container">
          <div>
            <h3>Business Website</h3>
            <img src={businessWebsiteimage} alt="portfolio website"></img>
          </div>
          <div>
            <h3>Research Business model</h3>
            <img src={researchPageimage} alt="landing page"></img>
          </div>
          <div>
            <h3>Analyse Business growth</h3>
            <img src={analyticsWebsiteimage} alt="personal website"></img>
          </div>

          <div>
            <h3>Solution for better growth</h3>
            <img src={businessGrowth} alt="landing page"></img>
          </div>
        </div>
      </div>
      <h1 id="work_model">How we work</h1>
      <div className="business"></div>
      <div id="models">
        <h2>&#9830; Research about your requirements</h2>
        <h2>&#9830; Analyse the solutions</h2>
        <h2>&#9830; Develop a mission statement</h2>
        <h2>&#9830; Identify strategic objectives</h2>
        <h2>&#9830; Tactical Plans</h2>
        <h2>&#9830; Building and maximizing performance</h2>
      </div>
      <Divider />
      <div className="bottoms">
        <div classname="get-in-touch-containers">
          <iframe
            src="https://abhishekdm.typeform.com/to/ATUsXg"
            frameBorder="0"
            title="typeform"
          ></iframe>
        </div>
      </div>
      <Divider />
      <Footer />
    </div>
  );
}
