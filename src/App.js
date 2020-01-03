import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick() {
    console.log("I'm working")
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}

export default App
