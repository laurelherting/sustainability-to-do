import React from "react";

function ClimateChangePlan(props) {
  return (
    <div>
      <h3 style={{ display: !props.solution && "none" }}>
        Solution: {props.solution}
      </h3>
      <h3>Details: {props.details}</h3>
      <br />
    </div>
  );
}

export default ClimateChangePlan;
