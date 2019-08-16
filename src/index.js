import React from "react";
import ReactDOM from "react-dom";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  const styles = {
    color: "#00FFFF",
    backgroundColor: "#FFF",
    fontSize: "24px"
  };

  return (
    <h1 style={{ color: "#00FFFF", backgroundColor: "#FFF" }}>
      Good {timeOfDay}!
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
