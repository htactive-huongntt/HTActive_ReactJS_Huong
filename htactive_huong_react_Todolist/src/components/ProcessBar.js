import React from "react";
import "./Todoitem.css";

function ProcessBar(props) {
  return (
    <div className="form-group col-md-12" style={{ display: "flex" }}>
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        <label htmlFor="percent" id="percent" className="percentBar">
          50 %
        </label>
      </div>
      <div
        className="col-xs-11 col-sm-11 col-md-11 col-lg-11"
        style={{ paddingTop: "11px" }}
      >
        <div className="progress">
          <div
            className="progress-bar bg-warning progress-bar-striped"
            id="checkline"
          />
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
