import React from 'react';
import ReactDOM from 'react-dom';

function App () {
  const wordOne = "Climate"
  const wordTwo = "Change"

  return (
    <h1>Research {`${wordOne} ${wordTwo}`}!</h1>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
