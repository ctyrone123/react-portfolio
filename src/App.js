import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../src/components/About/about";
import Contact from "../src/components/Contact/contact";
import Footer from "../src/components/Footer/footer";
import Navbar from "../src/components/Navbar/navbar";
import Portfolio from "../src/components/Portfolio/portfolio";

function App() {
  return (
    <Router>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About}>
          <About />
        </Route>
        <Route exact path="/portfolio" component={Portfolio}>
          <Portfolio />
        </Route>
        <Route exact path="/contact" component={Contact}>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </>
  </Router>
)
}

export default App;
