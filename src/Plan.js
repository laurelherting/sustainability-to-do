import React from "react";

function ClimateChangePlan(props) {
  return (
    <div>
      <h3>Solution: {props.solution}</h3>
      <h3>Details: {props.details}</h3>
    </div>
  );
}

export default ClimateChangePlan;
