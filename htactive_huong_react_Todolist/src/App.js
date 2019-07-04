import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Todoitem from "./components/Todoitem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newtask: ""
    };
  }

  checkIsCompleted = id => {
    let task = this.state.todos.find(todos => todos.id === id);
    task.isCompleted = !task.isCompleted;
    this.setState({
      todos: Object.assign(this.state.todos, task)
    });
    fetch(`http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  // updateTask = id => {
  //   let task = this.state.todos.find(todos => todos.id === id);
  //   task.isCompleted = !task.isCompleted;
  //   this.setState({
  //     todos: Object.assign(this.state.todos, task)
  //   });
  //   fetch(`http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks/${id}`, {
  //     method: "PUT",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(task)
  //   })
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  // };

  deleteTask = id => {
    let tasks = this.state.todos;
    let task = tasks.findIndex(item => item.id === id);
    tasks.splice(task, 1);
    this.setState({
      todos: tasks
    });
    fetch(`http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks`, {
      method: "post",
      mode: "cors"
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  };

  addTask = () => {
    let task = {
      task: this.state.newtask,
      isCompleted: false
    };
    let array = this.state.todos;
    array.unshift(task);
    this.setState({
      todos: array
    });
    fetch(`http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(response => response.json())
      .catch(error => console.log(error));
    console.log(task, this.state.todos);
  };

  handleNewTask = event => {
    this.setState({ newtask: event.target.value });
  };

  async componentDidMount() {
    await fetch(`http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          todos: data
        });
      })
      .catch(error => console.log(error));
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
            <h2 style={{ color: "black" }}> Things to do for this week!!! </h2>
            <div className="row input-area">
              <div
                className="form-group col-md-9"
                style={{ marginLeft: "0px", paddingLeft: "0px" }}
              >
                <input
                  type="text"
                  className="form-control inputTask"
                  id="addTask"
                  onChange={this.handleNewTask}
                />
              </div>
              <div className="form-group col-md-1">
                <button
                  id="addItem"
                  className="btn btn-primary block"
                  onClick={this.addTask}
                >
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
              <Todoitem
                todos={this.state.todos}
                checkIsCompleted={this.checkIsCompleted}
                // update={this.updateTask}
                deleteTask={this.deleteTask}
              />
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
