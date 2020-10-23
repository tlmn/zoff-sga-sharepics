import React, { useRef, useState } from "react";

import Cockpit from "../../../templates/diskursintervention/cockpit";
import { Link } from "gatsby";
import Template from "../../../templates/diskursintervention/template";

export default () => {
  const [state, setState] = useState({
    categoryText: "So komplex und doch so einfach",
    bodyText: "Das Problem heißt {Rassismus}",
    bodyTextScale: 100,
    bodyTextScaleRange: [60, 150],
    colorCombination: "turquoise_darkGray",
    logoLocalBranch: "",
    templateRef: useRef(null),
    templateScale: true,
  });

  return (
    <div className="container grid-12">
      <div className="col-span-12 py-1 flex justify-center">
        <Link to="/" className="hover:underline">zurück zur Übersicht</Link>
      </div>
      <div className="col-span-6">
        <Template state={state} />
      </div>
      <div className="col-span-4 col-start-8">
        <Cockpit state={state} setState={setState} />
      </div>
    </div>
  );
};
