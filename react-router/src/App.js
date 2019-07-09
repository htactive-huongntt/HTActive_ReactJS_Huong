import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
        </Router>
      </>
    );
  }
}

export default App;
