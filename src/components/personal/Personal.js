import React from "react";
import "./Personal.css";
import Footer from "../footer/footer";
import Divider from "@material-ui/core/Divider";
import person from "../../images/person.jpg";
import personalWebsiteimage from "../../images/personal_website_image.jpg";
import portfolioWebsiteimage from "../../images/portfolio_website_image.jpg";
import landingPageimage from "../../images/landing_page_image.jpg";
import Navbar from "../navbar/Navbar";

export default function Personal() {
  return (
    <div className="personal-main-container">
      <Navbar />
      <div className="top">
        <div className="personal-text-container">
          <h1>Are you an Individual?</h1>
          <p>looking for a website to</p>
          <div className="list-container">
            <p>Build your online presence?</p>
            <p>Reach potential customers?</p>
            <p>A website to show your creative work?</p>
          </div>
          {/* <div className="personal-text-container-btn">
            <button>Contact us</button>
          </div> */}
        </div>
        <div className="personal-img-container">
          <img src={person} alt="person"></img>
        </div>
      </div>
      <div className="mid">
        <p>We Offer</p>
        <div className="services-container">
          <div>
            <h3>Portfolio Website</h3>
            <img src={portfolioWebsiteimage} alt="portfolio website"></img>
          </div>
          <div>
            <h3>Personal Website</h3>
            <img src={personalWebsiteimage} alt="personal website"></img>
          </div>
          <div>
            <h3>Landing Page</h3>
            <img src={landingPageimage} alt="landing page"></img>
          </div>
        </div>
      </div>
      <div className="bottom" id="btm">
        <div classname="get-in-touch-container">
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
