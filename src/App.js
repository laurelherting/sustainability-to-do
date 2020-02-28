import React from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    // return updated state based on props
  }

  getSnapshotBeforeUpdate() {
    // create backup of data/way things are
  }

  // componentWillMount() {}

  componentDidMount() {}

  // componentWillReceiveProps(nextProps) {
  // if (nextProps.whatever !== this.props.whatever)
  // }

  shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate() {}

  render() {
    return <div>code here</div>;
  }
}

export default App;
