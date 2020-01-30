import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Footer from "../footer/footer";
import Divider from "@material-ui/core/Divider";
import RunImage from "../../images/runfinal.png";
import RocketImage from "../../images/rocketfinal.png";
import TeamImg from "../../images/team.png";
import s1 from "../../images/s1.png";
import s2 from "../../images/s2.png";
import s3 from "../../images/s3.png";
import s4 from "../../images/s4.png";
import Navbar from "../navbar/Navbar";

import "./landing.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        OurSpread
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
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[700]
        : theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  }
}));

const tiers = [
  {
    title: "Micro",
    price: "5000",
    description: ["Static Website", "WireFrame modeling", "Fast update"],
    buttonText: "Know more",
    buttonVariant: "outlined"
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "8000",
    description: [
      "Static Website",
      "Complete web development",
      "WireFrame modeling",
      "Prototyping",
      "Market research"
    ],
    buttonText: "Know more",
    buttonVariant: "contained"
  },
  {
    title: "Enterprise",
    price: "25000",
    description: [
      "Static Website",
      "Complete web development",
      "WireFrame modeling",
      "Prototyping",
      "Market research",
      "Business analysis"
    ],
    buttonText: "Know more",
    buttonVariant: "outlined"
  }
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      {/* body upper starts here*/}

      <div class="container">
        <img
          src={RunImage}
          alt="Nature"
          className="responsive"
          width="600"
          height="400"
        ></img>
        {/* <span className='arrow'>&#10230;</span> */}
        <img
          src={TeamImg}
          alt="Nature"
          className="right-responsive"
          width="600"
          height="400"
        ></img>
        <div className="centered">
          Hello, We develop your Business and help you Grow faster!
        </div>
        {/* <h6 style={{fontSize:'20px', position:'relative', marginTop:'-52px'}}>We provides you the best solutions to make you expand to the Internet </h6> */}
      </div>

      <div style={{ marginTop: "90px" }}>
        <div
          id="price"
          className="offer"
          style={{ textAlign: "center", marginBottom: "90px" }}
        >
          <h1 style={{ fontSize: "36px" }}>Why choose us</h1>
          <h3 style={{ fontSize: "13px", color: "grey" }}>
            Who are extremely in love with choice based system.
          </h3>
        </div>
      </div>
      <div className="serv">
        <Grid container spacing={null} justify="center">
          <Grid item xs={12} md={5}>
            <img src={s1} alt="s" />
            <h4
              style={{
                position: "absolue",
                marginLeft: "110px",
                marginTop: "-89px",
                fontSize: "18px"
              }}
            >
              More Options to choose
            </h4>
            <p style={{ marginLeft: "110px" }}>
              Easily choose the package you want from the bundle we provide.
            </p>
          </Grid>
          <Grid id="second" item xs={12} md={5}>
            <img src={s2} alt="s" />
            <h4
              style={{
                position: "absolue",
                marginLeft: "110px",
                marginTop: "-89px",
                fontSize: "18px"
              }}
            >
              Secure
            </h4>
            <p style={{ marginLeft: "110px" }}>
              Provide the security to get the rights things online.
            </p>
          </Grid>
        </Grid>

        <div style={{ marginTop: "90px" }}>
          <Grid container spacing={null} justify="center">
            <Grid item xs={12} md={5}>
              <img src={s3} alt="s" />
              <h4
                style={{
                  position: "absolue",
                  marginLeft: "110px",
                  fontSize: "18px",
                  marginTop: "-89px"
                }}
              >
                Fast Support
              </h4>
              <p style={{ marginLeft: "110px" }}>
                Support provided at the earliest as possible.
              </p>
            </Grid>
            <Grid id="second" item xs={12} md={5}>
              <img src={s4} alt="s" />
              <h4
                style={{
                  position: "absolue",
                  marginLeft: "110px",
                  marginTop: "-89px",
                  fontSize: "18px"
                }}
              >
                All in one
              </h4>
              <p style={{ marginLeft: "110px" }}>
                What else! Provides all above as a complete package.
              </p>
            </Grid>
          </Grid>
        </div>
      </div>

      <Container
        maxWidth="sm"
        component="main"
        className={classes.heroContent}
        id="pakage"
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Package
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Choose the best package for your business needs. <br />
          {/* It&apos;s easy! either choose a package or choose your specific needs. */}
        </Typography>
      </Container>
      {/* body upper ends here*/}

      <Container id="pkg" maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card id="test">
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent id="test">
                  <div className={classes.cardPricing}>
                    <Typography variant="h6" color="textSecondary">
                      from
                    </Typography>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      &#x20B9;{tier.price}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Link href="/contact" style={{ width: "100%" }}>
                    <Button center variant={tier.buttonVariant} color="primary">
                      Contact
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <Grid container spacing={5} justify='center'>
                <Grid item md={4}>
                    
                    fsdfsdfsdf
                </Grid>
                <Grid item md={4}>
                    dfsdggdsg
                </Grid>
                <Grid item md={4}>
                    hfghghg
                </Grid>
            </Grid> */}

      <div>
        <img
          src={RunImage}
          alt="Nature"
          className="b-responsive"
          width="600"
          height="400"
        ></img>
        <h6 className="challenge">
          Bring the Challenge to us, let us analyse and solve it for you.
        </h6>
        <Link href="/contact">
          <Button variant="contained" color="primary" className="chall-contact">
            Contact
          </Button>
        </Link>
      </div>

      <Divider />
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}
