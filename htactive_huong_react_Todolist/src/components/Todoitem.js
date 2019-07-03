import React from "react";

function Todoitem(props) {
  let className = "col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text";
  let check = "";
  if (props.todos.isCompleted) {
    check = "defaultChecked";
    className += " completed";
  }

  return (
    <>
      <div className="todoitem">
        <li className="list-group-item checkbox">
          <div className="row">
            <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
              <label>
                <input id="toggleTaskStatus" type="checkbox" checked={check} />
              </label>
            </div>
            <div className={className}>
              {props.todos.task}
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <i
                  className="fa fa-pencil-square-o"
                  aria-hidden="true"
                  style={{ liststyletype: "none", marginRight: "8px" }}
                />
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  style={{ liststyletype: "none" }}
                />
              </div>
            </div>
          </div>
        </li>
      </div>
    </>
  );
}

export default Todoitem;
