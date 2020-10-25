import React, { useRef, useState } from "react";

import Cockpit1 from "../../../templates/selbstrepraesentation/slide-1/cockpit";
import Cockpit2 from "../../../templates/selbstrepraesentation/slide-2/cockpit";
import Cockpit3 from "../../../templates/selbstrepraesentation/slide-3/cockpit";
import { Link } from "gatsby";
import Template1 from "../../../templates/selbstrepraesentation/slide-1/template";
import Template2 from "../../../templates/selbstrepraesentation/slide-2/template";
import Template3 from "../../../templates/selbstrepraesentation/slide-3/template";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        bodyText: "SPD: Oops, I did it again",
        bodyTextScale: 100,
        bodyTextScaleRange: [60, 150],
      },
      {
        image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
      },
      {
        bodyText: "SPD: Oops, I did it again",
        bodyTextScale: 100,
        bodyTextScaleRange: [60, 150],
      },
    ],
    colorTheme: "turquoise_darkGray",
    templateRef: useRef(null),
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
        <Template1 state={state} setState={setState} />
      </div>
      <div className="col-span-4 col-start-8">
        <Cockpit1 state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <Template1 state={state} setState={setState} />
      </div>
      <div className="col-span-4 col-start-8">
        <Cockpit1 state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <Template2 state={state} setState={setState} />
      </div>
      <div className="col-span-4 col-start-8">
        <Cockpit2 state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <Template3 state={state} setState={setState} />
      </div>
      <div className="col-span-4 col-start-8">
        <Cockpit3 state={state} setState={setState} />
      </div>
    </div>
  );
};
