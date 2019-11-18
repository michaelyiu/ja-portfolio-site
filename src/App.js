import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="canvas">
          <Landing />
        </div>
      </Router>
    </div>
  );
}

export default App;
