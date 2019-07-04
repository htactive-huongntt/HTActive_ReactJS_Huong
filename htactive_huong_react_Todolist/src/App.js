import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./components/Todoitem.css";
import Todoitem from "./components/Todoitem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch(`http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the todos state
      .then(data => {
        console.log(data);
        this.setState({
          todos: data
        });
      })
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
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
                style={{ marginLeft: "0px", paddingLeft: "0px" }}
              >
                <input
                  type="text"
                  className="form-control inputTask"
                  id="addTask"
                />
                {/* <input
                  id="idtemp"
                  style={{
                    display: "none",
                    marginLeft: "0px",
                    paddingLeft: "0px"
                  }}
                />
                <input
                  id="tasktemp"
                  style={{
                    display: "none",
                    marginLeft: "0px",
                    paddingLeft: "0px"
                  }}
                />
                <input
                  id="indexUndo"
                  style={{
                    display: "none",
                    marginLeft: "0px",
                    paddingLeft: "0px"
                  }}
                /> */}
              </div>
              <div className="form-group col-md-1">
                <button id="addItem" className="btn btn-primary block">
                  Add an Item
                </button>
                <button id="updateItem" className="btn btn-info none">
                  Update Item
                </button>
              </div>
              <div
                className="form-group col-md-12"
                style={{ padding: "0px 0px 0px 12px" }}
              >
                <button
                  id="showComplete"
                  className="btn btn-success btn-controll"
                >
                  Show Completed <br /> Tasks
                </button>
                <button
                  className="btn btn-success btn-controll"
                  id="hideComplete"
                >
                  Hide Completed <br /> Tasks
                </button>
                <button
                  className="btn btn-success btn-controll"
                  id="completeAll"
                >
                  Completed All <br /> Tasks
                </button>
                <button className="btn btn-success btn-controll" id="showAll">
                  Show All <br /> Tasks
                </button>
              </div>
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
            </div>
            <ul className="list-group" id="taskList">
              {this.state.todos.map(item => (
                <Todoitem key={item.id} todos={item} />
              ))}
            </ul>
          </div>
          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2" />
          <button className="btn btn-warning btn-undo" id="undobtn">
            Undo
          </button>
        </div>
      </>
    );
  }
}

export default App;
