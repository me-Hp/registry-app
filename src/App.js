import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./routes/Home";
import Registry from "./routes/registry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/registry">
          <Registry />
        </Route>
      </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
