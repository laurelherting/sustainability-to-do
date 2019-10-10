import React from "react";

import Plan from "./Plan";
import planData from "./planData";

function App() {
  const planComponents = planData.map(plan =>
    <plan key={plan.id} solution={plan.solution} details={plan.details} />)

  return (
    <div>
      /* Plan information adapated from the following website:
      https://www.denvergov.org/content/denvergov/en/mayors-office/
      newsroom/2019/mayor--council-announce-new-plan-to-address-climate.html */
      {planComponents}
    </div>
  );
}

export default App;
