import React, { useRef, useState } from "react";

import Controls from "../../../templates/pass-the-mic/controls";
import { Link } from "gatsby";
import Template from "../../../templates/pass-the-mic/template";
import Template0 from "../../../templates/pass-the-mic/slide-0/template";
import Template1 from "../../../templates/pass-the-mic/slide-1/template";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          category: { content: "Voll unsere Meinung" },
          body: {
            content: "{Don't let}\n{people}\n{drown.}",
            scale: 100,
            scaleRange: [60, 150],
          },
        },
        ref: useRef(null),
      },
      {
        data: {
          image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
          author: {
            content:
              "Pia Klemp",
          },
        },
        ref: useRef(null),
      },
    ],
    primaryColor: "turquoise",
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
        {state.slides.map((slide, i) => {
          switch (i) {
            case 0:
              return (
                <button
                  onClick={() => setState({ ...state, currentSlide: i })}
                  className="is-thumbnail hover:opacity-75"
                >
                  <Template0
                    state={state}
                    setState={setState}
                    thumbnail={true}
                  />
                </button>
              );
            case 1:
              return (
                <button
                  onClick={() => setState({ ...state, currentSlide: i })}
                  className="is-thumbnail hover:opacity-75"
                >
                  <Template1
                    state={state}
                    setState={setState}
                    thumbnail={true}
                  />
                </button>
              );
            default:
          }
        })}
      </div>

      <div className="col-span-6">
        <Template state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <Controls state={state} setState={setState} />
      </div>
    </div>
  );
};
