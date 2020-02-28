import React from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {}

  getSnapshotBeforeUpdate() {
    // create backup of data/way things are
  }
  render() {
    return <div>code here</div>;
  }
}

export default App;
