import React, { Component } from "react";

class StateAndLifecycle extends Component {
  constructor(props) {
    super(props);
    // declare a state
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // this function will be ran first, After 1 second tich() will be called once.
    this.time = setInterval(() => this.tick(), 1000);
  }

  tick() {
    // set new value for the state
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    // this function will be ran last
    clearInterval(this.time);
  }

  render() {
    return (
      <div>
        <h1>Hello everyone !!!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default StateAndLifecycle;
