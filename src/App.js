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
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out";
    return (
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
