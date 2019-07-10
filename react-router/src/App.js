import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./components/Content";
import Product from "./components/Products";
import Contact from "./components/Contact";
import Detail from "./components/Detail";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Route exact path="/" component={Content} />
          <Route path="/products" component={Product} />
          <Route path="/contact" component={Contact} />
          <Route path="/detail" component={Detail} />
        </Router>
      </>
    );
  }
}

export default App;
