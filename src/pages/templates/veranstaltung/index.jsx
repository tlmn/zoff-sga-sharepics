import React, { useRef, useState } from "react";

import Cockpit from "../../../templates/veranstaltung/cockpit";
import { Link } from "gatsby";
import Template from "../../../templates/veranstaltung/template";

export default () => {
  const [state, setState] = useState({
    typeText: "Vortrag",
    eventText: "Auf der Fury Road in den Feminismus",
    eventTextScale: 160,
    eventTextScaleRange: [120, 200],
    speakerText: "Veronika Kracher",
    locationText: "Ort",
    dateText: "Datum",
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
