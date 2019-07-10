import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ProductSpace = ({ id, name, price, image }) => {
  return (
    <Route>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="card" style={{ width: "400px" }}>
          <img
            className="card-img-top"
            src={image}
            alt="Card image"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">Price: {price}</p>
            <Link
              to={{
                pathname: "/detail",
                state: { id: id, name: name, price: price, image: image }
              }}
            >
              <button type="button" className="btn btn-large btn-danger">
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Route>
  );
};

const Products = props => {
  console.log(props);
  return (
    <>
      <h1>products </h1>
      <div className="row">
        {props.location.state.map(t => (
          <ProductSpace
            id={t.id}
            name={t.name}
            price={t.price}
            image={t.image}
            key={t.id}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
