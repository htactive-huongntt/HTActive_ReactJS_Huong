import React from "react";
import "./Todoitem.css";

function Todoitem(props) {
  const checkCompleted = id => {
    props.checkIsCompleted(id);
  };

  const updateTask = id => {
    props.updateTask(id);
  };

  const deleteTask = id => {
    props.deleteTask(id);
  };

  return (
    <>
      {props.todos.map(task => (
        <div className="todoitem" key={task.id}>
          <li className="list-group-item checkbox">
            <div className="row">
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label>
                  <input
                    id="toggleTaskStatus"
                    type="checkbox"
                    defaultChecked={task.isCompleted}
                    onClick={() => checkCompleted(task.id)}
                  />
                </label>
              </div>
              <div
                className={
                  task.isCompleted
                    ? "col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text completed"
                    : "col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text"
                }
              >
                {task.task}
              </div>
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <i
                  className="fa fa-pencil-square-o pencil"
                  aria-hidden="true"
                  onClick={() => updateTask(task.id)}
                />
                <i
                  className="fa fa-trash trash"
                  aria-hidden="true"
                  onClick={() => deleteTask(task.id)}
                />
              </div>
            </div>
          </li>
        </div>
      ))}
    </>
  );
}

export default Todoitem;
