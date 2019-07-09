import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Content = props => {
  return (
    <>
      <p> Day la trang noi dung</p>
      <img src={props.location.status} />
    </>
  );
};

export default Content;
