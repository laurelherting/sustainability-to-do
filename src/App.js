import React from "react";
import Conditional from "./Conditional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: [
        "Call your senator",
        "New email available. Click links for further instructions."
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.unreadMessages.length > 0 && (
          <h2>You have {this.state.unreadMessages.length} unread messages</h2>
        )}
      </div>
    );
  }
}

export default App;
