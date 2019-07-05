import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Todoitem from "./components/Todoitem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newtask: "",
      filter: "all",
      idTemp: ""
    };
  }

  checkIsCompleted = id => {
    let newTodos = this.state.todos.map(t => {
      if (id !== t.id) return t;
      return {
        ...t,
        isCompleted: !t.isCompleted
      };
    });
    this.setState({
      todos: newTodos
    });
    fetch(`http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodos.find(t => t.id === id))
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  showCompleted = () => this.setState({ filter: "completed" });

  componentDidMount() {
    this.loadData();
  }

  hideCompleted = () => this.setState({ filter: "active" });
  showAll = () => this.setState({ filter: "all" });

  loadData = () => {
    fetch(`http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          todos: data
        });
      })
      .catch(error => console.log(error));
  };

  updateTask = id => {
    const btnAdd = document.querySelector(".addItem");
    btnAdd.setAttribute("class", "btn btn-primary none addItem");
    const btnUpdate = document.querySelector(".updateItem");
    btnUpdate.setAttribute("class", "btn btn-info block updateItem");
    let task = this.state.todos.find(todos => todos.id === id);
    const txtNewTask = document.querySelector("#addTask");
    txtNewTask.value = task.task;
    this.setState({
      idTemp: task.id
    });
  };

  updateValueTask = () => {
    let newTodos = this.state.todos.map(t => {
      if (t.id !== this.state.idTemp) return t;
      return {
        ...t,
        task: this.state.newtask
      };
    });
    console.log(newTodos.find(t => t.id === this.state.idTemp));
    this.setState({
      todos: newTodos
    });
    fetch(
      `http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks/${this.state.idTemp}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodos.find(t => t.id === this.state.idTemp))
      }
    )
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  deleteTask = id => {
    let tasks = this.state.todos;
    let task = tasks.findIndex(item => item.id === id);
    tasks.splice(task, 1);
    this.setState({
      todos: tasks
    });
    fetch(`http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks/${id}`, {
      method: "delete",
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
    let array = [...this.state.todos, task];
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
  };

  handleNewTask = event => {
    this.setState({ newtask: event.target.value });
  };

  getFilterTodo = () => {
    switch (this.state.filter) {
      case "active":
        return this.state.todos.filter(t => !t.isCompleted);
      case "completed":
        return this.state.todos.filter(t => t.isCompleted);
      default:
        return this.state.todos;
    }
  };

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
                  className="btn btn-primary block addItem"
                  onClick={this.addTask}
                >
                  Add an Item
                </button>
                <button
                  id="updateItem"
                  className="btn btn-info none updateItem"
                  onClick={this.updateValueTask}
                >
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
                  onClick={this.showCompleted}
                >
                  Show Completed <br /> Tasks
                </button>
                <button
                  className="btn btn-success btn-controll"
                  id="hideComplete"
                  onClick={this.hideCompleted}
                >
                  Hide Completed <br /> Tasks
                </button>
                <button
                  className="btn btn-success btn-controll"
                  id="completeAll"
                >
                  Completed All <br /> Tasks
                </button>
                <button
                  className="btn btn-success btn-controll"
                  id="showAll"
                  onClick={this.showAll}
                >
                  Show All <br /> Tasks
                </button>
              </div>
            </div>
            <ul className="list-group" id="taskList">
              <Todoitem
                todos={this.getFilterTodo()}
                checkIsCompleted={this.checkIsCompleted}
                updateTask={this.updateTask}
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
