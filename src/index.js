import React from "react";
import ReactDOM from "react-dom";

function App() {
  const date = new Date();
  // const date = new Date(2019, 8, 16);
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#FFFF00";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#00CED1";
  } else {
    timeOfDay = "night";
    styles.color = "#FF1493";
  }

  return <h1 style={styles}>Good {timeOfDay}!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
