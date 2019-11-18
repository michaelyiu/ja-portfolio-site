import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navigation from "./components/layout/Navigation";
import Work from "./components/work/Work";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="canvas">
          <Navigation />
          <Route exact path="/" component={Landing} />
          <Route exact path="/works" component={Work} />
        </div>
      </Router>
    </div>
  );
}

export default App;
