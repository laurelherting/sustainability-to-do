import React from "react";
import Conditional from "./Conditional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        {this.state.isLoading}
        <Conditional isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
