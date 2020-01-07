import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange= this.handleChange.bind(this)
  }

  handleChange(id) {
    console.log("Changed", id)
  }

  render() {
    return (
      <div className = "todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App
