import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Footer from './layouts/Footer';
import About from './Page/About';
import Contact from './Page/Contact';
import Homepage from './Page/Homepage/Homepage';



function HomePage() {
  return (
    <div className="home">
     <Header />
      <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/Contact">
          <Contact/>
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default HomePage;
