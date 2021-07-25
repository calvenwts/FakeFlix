import React from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/browse" render={() => <Homepage />} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
