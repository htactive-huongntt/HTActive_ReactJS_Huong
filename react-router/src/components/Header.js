import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from "../components/Content";
import Product from "../components/Products";
import Contact from "../components/Contact";

const MenuLink = ({ label, to, exactActive, state, index }) => {
  return (
    <Route
      path={to}
      exact={exactActive}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={`nav-item ${active}`}>
            <Link
              to={{ to, status: `../images/${state[index].image}` }}
              className="nav-link"
            >
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: [
        { name: "Trang Chủ", to: "/", exact: true, image: "1.jpg" },
        { name: "Sản Phẩm", to: "/products", exact: false, image: "2.jpg" },
        { name: "Chi Tiết", to: "/detail", exact: false, image: "3.jpg" },
        { name: "Liên Hệ", to: "/contact", exact: false, image: "4.jpg" }
      ]
    };
  }

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {this.state.menu.map((t, index) => (
                <MenuLink
                  label={t.name}
                  to={t.to}
                  state={this.state.menu}
                  exactActive={t.exact}
                  index={index}
                  key={index}
                />
              ))}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <Route exact path="/" component={Content} />
        <Route path="/products" component={Product} />
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
}

export default Header;
