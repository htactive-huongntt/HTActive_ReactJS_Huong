import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Products = props => {
  return (
    <div>
      <p> Day la trang san pham</p>
      <img src={props.location.status} />
    </div>
  );
};

export default Products;
