import React from "react";
import Conditional from "./Conditional";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div>Conditional isLoading={this.state.isLoading} /></div>;
  }
}

export default App;
