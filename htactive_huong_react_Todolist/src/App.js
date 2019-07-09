import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Todoitem from "./components/Todoitem";
import ProcessBar from "./components/ProcessBar";
import Button from "./components/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newtask: "",
      filter: "",
      idTemp: "",
      percent: 0,
      btnShowCompl: false,
      btnShowAll: false,
      btnHideCompl: false,
      btnComplAll: false,
      btnClassName: "btn btn-controll"
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
    let per = Math.floor(this.countPercent(newTodos));
    this.setState({
      todos: newTodos,
      percent: per,
      btnShowCompl: false,
      btnShowAll: false,
      btnHideCompl: false,
      btnComplAll: false,
      btnClassName: "btn btn-controll"
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

  countPercent = array => {
    let total = array.length;
    let completed = array.filter(t => t.isCompleted).length;
    let per = (completed / total) * 100;
    return per;
  };

  componentDidMount() {
    this.loadData();
  }

  showCompleted = () =>
    this.setState({
      filter: "completed",
      btnShowCompl: true,
      btnComplAll: false,
      btnHideCompl: false,
      btnShowAll: false
    });
  completedAll = () =>
    this.setState({
      filter: "completedAll",
      btnShowCompl: false,
      btnComplAll: true,
      btnHideCompl: false,
      btnShowAll: false
    });
  hideCompleted = () =>
    this.setState({
      filter: "active",
      btnShowCompl: false,
      btnComplAll: false,
      btnHideCompl: true,
      btnShowAll: false
    });
  showAll = () =>
    this.setState({
      filter: "all",
      btnShowCompl: false,
      btnComplAll: false,
      btnHideCompl: false,
      btnShowAll: true
    });

  loadData = () => {
    fetch(`http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        let per = Math.floor(this.countPercent(data));
        this.setState({
          todos: data.reverse(),
          percent: per
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
    this.setState({
      idTemp: task.id,
      newtask: task.task
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
    let total = newTodos.length;
    let completed = newTodos.filter(t => t.isCompleted).length;
    let per = (completed / total) * 100;
    this.setState({
      todos: newTodos,
      percent: per,
      newtask: ""
    });
    const btnAdd = document.querySelector(".addItem");
    btnAdd.setAttribute("class", "btn btn-primary block addItem");
    const btnUpdate = document.querySelector(".updateItem");
    btnUpdate.setAttribute("class", "btn btn-info none updateItem");
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
      todos: tasks,
      percent: Math.floor(this.countPercent(tasks))
    });
    fetch(`http://5d1c6501f31e7f00147eb57f.mockapi.io/tasks/${id}`, {
      method: "delete",
      mode: "cors"
    });
  };

  randomId() {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  addTask = () => {
    console.log(this.state.newtask);
    if (this.state.newtask === "") {
      alert("Please enter data !");
    } else {
      const check = this.state.todos.some(
        currTask => currTask.task === this.state.newtask
      );
      if (check) {
        alert("This Task Is Already Exists !!");
      } else {
        let task = {
          id: this.randomId(),
          task: this.state.newtask,
          isCompleted: false
        };
        let array = [task, ...this.state.todos];
        this.setState({
          todos: array,
          newtask: "",
          percent: Math.floor(this.countPercent(array))
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
      }
    }
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
      case "all":
        return this.state.todos;
      case "completedAll":
        return this.state.todos;
      default:
        return this.state.todos;
    }
  };

  render() {
    return (
      <>
        <div className="content-area row" style={{ padding: "8% 2% 8% 2%" }}>
          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2" />
          <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
            <h2 style={{ color: "black" }}> Things to do for this week!!! </h2>
            <div className="row input-area">
              <div
                className="form-group col-md-9"
                style={{ marginLeft: "30px", paddingLeft: "10px" }}
              >
                <input
                  type="text"
                  className="form-control inputTask"
                  id="addTask"
                  value={this.state.newtask}
                  onChange={this.handleNewTask}
                />
              </div>
              <div className="form-group col-md-2">
                <Button
                  btnId="addItem"
                  content="Add New Task"
                  className={"btn btn-primary block addItem"}
                  onclick={this.addTask}
                />
                <Button
                  btnId="updateItem"
                  content="Update Task"
                  className="btn btn-info none updateItem"
                  onclick={this.updateValueTask}
                />
              </div>
              <div
                className="form-group col-md-12"
                style={{ padding: "0px 0px 0px 12px" }}
              >
                <Button
                  btnId="showCompleted"
                  content="Show Completed Tasks"
                  className={
                    this.state.btnShowCompl
                      ? this.state.btnClassName + " btn-success"
                      : this.state.btnClassName
                  }
                  onclick={this.showCompleted}
                />
                <Button
                  btnId="hideCompleted"
                  content="Hide Completed tasks"
                  className={
                    this.state.btnHideCompl
                      ? this.state.btnClassName + " btn-success"
                      : this.state.btnClassName
                  }
                  onclick={this.hideCompleted}
                />
                <Button
                  btnId="completedAll"
                  content="Completed All Tasks"
                  className={
                    this.state.btnComplAll
                      ? this.state.btnClassName + " btn-success"
                      : this.state.btnClassName
                  }
                  onclick={this.completedAll}
                />
                <Button
                  btnId="showAll"
                  content="Show All Tasks"
                  className={
                    this.state.btnShowAll
                      ? this.state.btnClassName + " btn-success"
                      : this.state.btnClassName
                  }
                  onclick={this.showAll}
                />
              </div>
              <ProcessBar width={this.state.percent} />
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
