import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.number}</h3>
      </div>
    );
  }
}

export default App;
