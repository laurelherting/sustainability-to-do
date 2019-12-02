import React, {Component} from "react";

class App extends Component{
  constructor() {
    super();
    this.state = {
      name: "Jim",
      number: "10"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.number} sustainability changes this year</h3>
      </div>
    );
  }
}

export default App;
