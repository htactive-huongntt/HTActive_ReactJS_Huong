import React, { Component } from "react";

class Todoitem extends Component {
  render() {
    const { content } = this.props;
    let className = "col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text";
    if (content.isCompleted === true) {
      className += " completed";
    }
    console.log(className);
    return (
      <>
        <div className="todoitem">
          <li className="list-group-item checkbox">
            <div className="row">
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label>
                  {" "}
                  <input
                    id="toggleTaskStatus"
                    type="checkbox"
                    defaultValue
                  />{" "}
                </label>
              </div>
              <div className={className}>
                {" "}
                {content.content}
                <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                  <i
                    href
                    className="fa fa-pencil-square-o"
                    aria-hidden="true"
                    style={{ liststyletype: "none", marginRight: "8px" }}
                  >
                    {" "}
                  </i>
                  <i
                    href
                    className="fa fa-trash"
                    aria-hidden="true"
                    style={{ liststyletype: "none" }}
                  >
                    {" "}
                  </i>
                </div>
              </div>
            </div>
          </li>
        </div>
      </>
    );
  }
}

export default Todoitem;
