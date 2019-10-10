import React from "react";

import Plan from "./Plan";

function App() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const doubled = nums.map(function(num) {
    return num * 2;
  });

  return (
    <div>
      /* Plan information adapated from the following website:
      https://www.denvergov.org/content/denvergov/en/mayors-office/
      newsroom/2019/mayor--council-announce-new-plan-to-address-climate.html */
      <Plan
        details="Cars and Global Warming."
      />
      <Plan
        solution="Establishing a new Office of Climate Action, Sustainability and Resiliency
        that will report directly to the Mayor."
        details="The office will be established by ordinance with City Council approval
        by Oct. 31 and will be fully functional by July 1, 2020. It will combine personnel from
        the existing Office of Sustainability and the Denver Department of Public Health &
        Environment. The Mayor also intends to propose an additional $8 million next year to
        expand efforts to reduce greenhouse gas emissions."
      />
      <Plan
        solution="Immediately launching a formal process to examine Denver’s
        current climate work, identify gaps, analyze funding needs and engage
        experts, interested stakeholders and a wide range of community members."
        details="The process will be professionally facilitated and led by both
        the Administration and members of Council. It will conclude by the end of
        May 2020, giving Council ample time to consider referring a possible
        measure to the November 2020 ballot."
      />
    </div>
  );
}

export default App;
