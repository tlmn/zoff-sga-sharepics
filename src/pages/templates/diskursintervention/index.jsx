import React, { useRef, useState } from "react";

import Cockpit from "../../../templates/diskursintervention/cockpit";
import { Link } from "gatsby";
import Template from "../../../templates/diskursintervention/template";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          category: { content: "So komplex und doch so einfach" },
          body: {
            content: "Das Problem heißt {Rassismus}!",
            scaleRange: [60, 150],
            scale: 100,
          },
          localBranch: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "turquoise_darkGray",
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
