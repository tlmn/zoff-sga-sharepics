import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/mitglieder/controlsLeft";
import ControlsRight from "../../../templates/mitglieder/controlsRight";
import Template from "../../../templates/mitglieder/template";
import Template0 from "../../../templates/mitglieder/slide-0/template";
import Template1 from "../../../templates/mitglieder/slide-1/template";
import Template2 from "../../../templates/mitglieder/slide-2/template";
import TemplateLayout from "../../../components/templateLayout";

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
          localBranch: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "red_violet",
    templateScale: true,
  });

  return (
    <TemplateLayout>
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
      
      <div className="col-span-3">
        <ControlsLeft state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <Template state={state} setState={setState} />
      </div>
      <div className="col-span-3">
        <ControlsRight state={state} setState={setState} />
      </div>
    </TemplateLayout>
  );
};
