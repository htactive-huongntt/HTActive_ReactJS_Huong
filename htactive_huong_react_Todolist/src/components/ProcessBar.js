import React from "react";
import "./Todoitem.css";
import "./ProcessBar.css";

function ProcessBar(props) {
  let bar = document.querySelector("#checkline");
  let per = props.width;
  if (per > 0 && per <= 30) {
    bar.setAttribute("class", "progress-bar bg-danger progress-bar-striped");
  } else if (per > 30 && per <= 50) {
    bar.setAttribute("class", "progress-bar bg-warning progress-bar-striped");
  } else if (per > 50 && per <= 80) {
    bar.setAttribute("class", "progress-bar bg-info progress-bar-striped");
  } else if (per > 80 && per <= 100) {
    bar.setAttribute("class", "progress-bar bg-success progress-bar-striped");
  }
  return (
    <div className="form-group col-md-12" style={{ display: "flex" }}>
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        <label htmlFor="percent" id="percent" className="percentBar">
          {props.width + " %"}
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
            style={{ width: props.width + "%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProcessBar;
