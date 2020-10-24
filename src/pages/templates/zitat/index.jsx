import React, { useRef, useState } from "react";

import Cockpit from "../../../templates/zitat/cockpit";
import { Link } from "gatsby";
import Template from "../../../templates/zitat/template";

export default () => {
  const [state, setState] = useState({
    bodyText: "Eine vom Patriarchat befreite Gesellschaft? Viele sprechen davon aber wenige setzen es in die Praxis um.",
    bodyTextScale: 100,
    bodyTextScaleRange: [60, 150],
    authorText: "Rosa Luxemburg",
    colorCombination: "violet_red",
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
