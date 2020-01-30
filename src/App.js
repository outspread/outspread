import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Feature from "./components/feature/Feature";
import Contact from "./components/contact/Aboutus";
import Personal from "./components/personal/Personal";
import ScrollToTop from "react-router-scroll-top";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ScrollToTop>
              <Landing />
            </ScrollToTop>
          </Route>
          <Route exact path="/business">
            <ScrollToTop>
              <Feature />
            </ScrollToTop>
          </Route>
          <Route exact path="/contact">
            <ScrollToTop>
              <Contact />
            </ScrollToTop>
          </Route>
          <Route exact path="/personal">
            <ScrollToTop>
              <Personal />
            </ScrollToTop>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
