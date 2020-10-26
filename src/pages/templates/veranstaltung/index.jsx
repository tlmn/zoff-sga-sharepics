import React, { useRef, useState } from "react";

import Cockpit from "../../../templates/veranstaltung/cockpit";
import { Link } from "gatsby";
import Template from "../../../templates/veranstaltung/template";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          type: { content: "Vortrag" },
          event: {
            content: "Auf der Fury Road in den Feminismus!",
            scaleRange: [120, 200],
            scale: 160,
          },
          speaker: { content: "Veronika Kracher" },
          location: { content: "Ort" },
          date: { content: "Datum" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "darkGray_turquoise",
    templateScale: true,
  });

  return (
    <div className="container grid-12">
      <div className="col-span-12 py-1 flex justify-center">
        <Link to="/" className="hover:underline">
          zurück zur Übersicht
        </Link>
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
