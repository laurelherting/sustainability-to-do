import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>LOG IN</button>
      </div>
    );
  }
}

export default App;
