import React from "react";

function ClimateChangePlan(props) {
  return (
    <div>
      <h3>Problem: {props.problem}</h3>
      <h3>Solution: {props.solution}</h3>
    </div>
  );
}

export default ClimateChangePlan;
