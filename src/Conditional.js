import React from "react";

function Conditional(props) {
  props.isLoading === true ? <h1>Loading...</h1> : <h1>Rendering</h1>;
  if (props.isLoading === true) {
    return <h1>Loading...</h1>;
  } else {
    return <h1>Temperature</h1>;
  }
}

export default Conditional;
