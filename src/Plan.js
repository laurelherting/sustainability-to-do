import React from "react";

function ClimateChangePlan(props) {
  return (
    <div>
      <h3 style={{ display: !props.solution && "none" }}>
        Solution: {props.solution}
      </h3>
      <h3 style={{ color: !props.details && "#303030" }}>
        Details: {props.details}
      </h3>
      <hr />
    </div>
  );
}

export default ClimateChangePlan;
