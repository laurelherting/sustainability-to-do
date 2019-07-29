import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo() {
  return (
    <div>
      <h1>Laurel Herting</h1>
      <p>This is a paragraph about me...</p>
      <ul>
        <li>Reduce</li>
        <li>Reuse</li>
        <li>Repurpose</li>
        <li>Recycle</li>
      </ul>
    </div>
  )
};

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
);
