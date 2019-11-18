import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navigation from "./components/layout/Navigation";
import Work from "./components/pages/Work";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="canvas">
          <Navigation />
          <Route exact path="/" component={Landing} />
          <Route exact path="/works" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;
