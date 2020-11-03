import React, { useRef, useState } from "react";

import Controls from "../../../templates/mitglieder/controls";
import { Link } from "gatsby";
import Template from "../../../templates/mitglieder/template";
import Template0 from "../../../templates/mitglieder/slide-0/template";
import Template1 from "../../../templates/mitglieder/slide-1/template";
import Template2 from "../../../templates/mitglieder/slide-2/template";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          statement: { content: "Ich bin bei Linksjugend ['solid] weil" },
          image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
        },
        ref: useRef(null),
      },
      {
        data: {
          body: {
            content:
              "Eine vom Patriarchat befreite Gesellschaft? Viele sprechen davon aber wenige setzen es in die Praxis um.",
            scale: 60,
            scaleRange: [50, 70],
          },
          author: { content: "Anna Westner" },
        },
        ref: useRef(null),
      },
      {
        data: {
          body: {
            content: "Man muss doch alles selber machen!",
            scale: 100,
            scaleRange: [60, 150],
          },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "red_violet",
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
            case 2:
              return (
                <button
                  onClick={() => setState({ ...state, currentSlide: i })}
                  className="is-thumbnail hover:opacity-75"
                >
                  <Template2
                    state={state}
                    setState={setState}
                    thumbnail={true}
                  />
                </button>
              );
            default:
              return null;
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
