import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./components/Todoitem.css";
import Todoitem from "./components/Todoitem";

class App extends Component {
  constructor() {
    super();
    this.todoItem = [
      { content: "Work alone !!!", isCompleted: true },
      { content: "Walk with dog", isCompleted: false },
      { content: "Sing a song", isCompleted: false }
    ];
  }
  render() {
    return (
      <>
        <div
          className="content-area row"
          style={{ border: "2px solid black", padding: "8% 2% 8% 2%" }}
        >
          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2" />
          <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
            <h2 style={{ color: "white" }}> Things to do for this week!!! </h2>
            <div className="row input-area">
              <div
                className="form-group col-md-9"
                style=" margin-left: 0px, padding-left:0px"
              >
                <input
                  type="text"
                  style=" margin-left: 0px, padding-left:0px"
                  className="form-control"
                  id="addTask"
                />
                <input
                  id="idtemp"
                  style=" margin-left: 0px, padding-left:0px"
                  style={{ display: "none" }}
                />
                <input
                  id="tasktemp"
                  style=" margin-left: 0px, padding-left:0px"
                  style={{ display: "none" }}
                />
                <input
                  id="indexUndo"
                  style=" margin-left: 0px, padding-left:0px"
                  style={{ display: "none" }}
                />
              </div>
              <div className="form-group col-md-1">
                <button
                  id="addItem"
                  className="btn btn-primary"
                  style={{ display: "block" }}
                  onclick="toDolist.addTaskClick()"
                >
                  {" "}
                  Add an Item{" "}
                </button>
                <button
                  id="updateItem"
                  className="btn btn-info"
                  style={{ display: "none" }}
                  onclick="toDolist.updateTaskClick()"
                >
                  {" "}
                  Update Item{" "}
                </button>
              </div>
              <div
                className="form-group col-md-12"
                style={{ padding: "0px 0px 0px 12px" }}
              >
                <button
                  className="btn btn-success"
                  id="showComplete"
                  style={{
                    width: "150px",
                    height: "auto",
                    textAlign: "center",
                    margin: "0px 20px 0px 0px"
                  }}
                >
                  {" "}
                  Show Completed <br /> Tasks
                </button>
                <button
                  className="btn btn-success"
                  id="hideComplete"
                  style={{
                    width: "150px",
                    height: "auto",
                    margin: "0px 20px 0px 0px"
                  }}
                >
                  {" "}
                  Hide Completed <br /> Tasks
                </button>
                <button
                  className="btn btn-success"
                  id="completeAll"
                  style={{
                    width: "150px",
                    height: "auto",
                    margin: "0px 20px 0px 0px"
                  }}
                >
                  {" "}
                  Completed All <br /> Tasks{" "}
                </button>
                <button
                  className="btn btn-success"
                  id="showAll"
                  style={{
                    width: "150px",
                    height: "auto",
                    margin: "0px 20px 0px 0px"
                  }}
                >
                  {" "}
                  Show All <br /> Tasks{" "}
                </button>
              </div>{" "}
              {/* onclick="toDolist.showAll()" */}
              <div className="form-group col-md-12" style={{ display: "flex" }}>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                  <label
                    htmlFor="percent"
                    id="percent"
                    style={{
                      color: "white",
                      backgroundColor: "chartreuse",
                      width: "40px",
                      height: "40px",
                      borderRadius: "100%",
                      textAlign: "center",
                      paddingTop: "5px"
                    }}
                  >
                    {" "}
                    50 %{" "}
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
            </div>
            <ul className="list-group" id="taskList">
              {" "}
              {this.todoItem.map((item, index) => (
                <Todoitem key={index} content={item} />
              ))}
            </ul>
          </div>
          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2" />
          <button
            className="btn btn-warning"
            style={{
              width: "150px",
              height: "auto",
              marginLeft: "50%",
              marginTop: "80px",
              display: "none"
            }}
            id="undobtn"
            onclick="toDolist.unDo()"
          >
            {" "}
            Undo{" "}
          </button>
        </div>
      </>
    );
  }
}

export default App;
