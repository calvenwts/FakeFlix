import React from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import TVSeries from "./pages/TVSeries/TVSeries";
import Movies from "./pages/Movies/Movies";
import Popular from "./pages/Popular/Popular";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <>
        <Navbar />
      </>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Redirect to="/browse" />
          </Route>
          <Route exact path="/tvseries" render={() => <TVSeries />} />
          <Route exact path="/browse" render={() => <Homepage />} />
          <Route exact path="/movies" render={() => <Movies />} />
          <Route exact path="/popular" render={() => <Popular />} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
