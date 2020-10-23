import React, { useRef, useState } from "react";

import Cockpit from "../../../templates/diskursintervention/cockpit";
import Template from "../../../templates/diskursintervention/template";

export default () => {
  const [state, setState] = useState({
    categoryText: "Kategorie",
    bodyText: "Lorem Ipsum is simply!!",
    bodyTextScale: 100,
    bodyTextScaleRange: [60, 150],
    colorCombination: "darkGray_turquoise",
    templateRef: useRef(null),
    templateScale: true,
  });

  return (
    <div className="container grid-12">
      <div className="col-span-6">
        <Template state={state} />
      </div>
      <div className="col-span-4 col-start-8">
        <Cockpit state={state} setState={setState} />
      </div>
    </div>
  );
};
