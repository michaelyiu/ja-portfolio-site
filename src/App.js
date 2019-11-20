import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
// import SMIcons from "./components/layout/SMIcons";

import Work from "./works/Work";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Landing from "./components/pages/Landing";

import './App.css';
import { Footer } from './components/layout/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="canvas">
          <Navigation />
          {/* <SMIcons /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/works" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
