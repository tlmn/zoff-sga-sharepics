import React, { useRef, useState } from "react";

import Cockpit from "../../../templates/selbstrepraesentation/cockpit";
import { Link } from "gatsby";
import Template from "../../../templates/selbstrepraesentation/template";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          body: { content: "feministisch", scale: 100, scaleRange: [60, 150] },
        },
        ref: useRef(null),
      },
      {
        data: { image: { url: null, position: { x: 0, y: 0 }, scale: 0 } },
        ref: useRef(null),
      },
      {
        data: {
          body: {
            content:
              "Eine vom Patriarchat befreite Gesellschaft? Viele sprechen davon aber wenige setzen es in die Praxis um.",
            scale: 100,
            scaleRange: [60, 150],
          },
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
      <div className="col-span-12 flex justify-center py-2">
        {state.slides.map((slide, i) => (
          <button
            onClick={() => setState({ ...state, currentSlide: i })}
            className="bg-darkGray text-turquoise font-headline italic text-lg hover:bg-darkGray-lighter p-2 mx-2"
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="col-span-6">
        <Template state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <Cockpit state={state} setState={setState} />
      </div>
    </div>
  );
};
