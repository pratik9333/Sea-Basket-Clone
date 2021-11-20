import React, { Fragment } from "react";

import "./App.css";
import WebFooter from "./Components/WebFooter";
import Home from "./Pages/Home";

function App() {
  return (
    <Fragment>
      <div className="main-app">
        <Home />
      </div>
      <WebFooter />
    </Fragment>
  );
}

export default App;
