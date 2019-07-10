import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MenuLink = ({ label, to, exactActive, state }) => {
  console.log(to);
  return (
    <Route
      path={to}
      exact={exactActive}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={`nav-item ${active}`}>
            <Link
              className="nav-link"
              to={{
                pathname: `${to}`,
                state: state
              }}
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
        {
          name: "Trang Chủ",
          to: "/",
          exact: "true"
        },
        {
          name: "Sản Phẩm",
          to: "/products",
          exact: "false"
        },
        {
          name: "Liên Hệ",
          to: "/contact",
          exact: "false"
        }
      ],
      products: [
        {
          id: 1,
          name: "San Pham So 1",
          price: 2250000,
          image:
            "https://thuthuatnhanh.com/wp-content/uploads/2018/08/anh-nen-hoa-Van-Anh-Fuchsia.jpg"
        },
        {
          id: 2,
          name: "San Pham So 2",
          price: 2250000,
          image:
            "https://thuthuatnhanh.com/wp-content/uploads/2018/08/anh-nen-hoa-Van-Anh-Fuchsia.jpg"
        },
        {
          id: 3,
          name: "San Pham So 3",
          price: 2250000,
          image:
            "https://thuthuatnhanh.com/wp-content/uploads/2018/08/anh-nen-hoa-Van-Anh-Fuchsia.jpg"
        },
        {
          id: 4,
          name: "San Pham So 4",
          price: 2250000,
          image:
            "https://thuthuatnhanh.com/wp-content/uploads/2018/08/anh-nen-hoa-Van-Anh-Fuchsia.jpg"
        },
        {
          id: 5,
          name: "San Pham So 5",
          price: 2250000,
          image:
            "http://hoatuoi365.net/upload/images/hoa-sinh-nhat-de-thuong-2.jpg"
        },
        {
          id: 6,
          name: "San Pham So 6",
          price: 2250000,
          image:
            "http://hoatuoi365.net/upload/images/hoa-sinh-nhat-de-thuong-2.jpg"
        },
        {
          id: 7,
          name: "San Pham So 7",
          price: 2250000,
          image:
            "http://hoatuoi365.net/upload/images/hoa-sinh-nhat-de-thuong-2.jpg"
        },
        {
          id: 8,
          name: "San Pham So 8",
          price: 2250000,
          image:
            "http://hoatuoi365.net/upload/images/hoa-sinh-nhat-de-thuong-2.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.state.menu.map((t, index) => (
              <MenuLink
                label={t.name}
                to={t.to}
                state={this.state.products}
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
    );
  }
}

export default Header;
