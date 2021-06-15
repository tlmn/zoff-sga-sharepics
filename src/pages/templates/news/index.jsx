import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/news/controlsLeft";
import ControlsRight from "../../../templates/news/controlsRight";
import Template from "../../../templates/news/template";
import TemplateContext from "../../../components/templateContext";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          body: {
            options: {
              min: 1,
              max: 2,
              defaultScale: { value: 100, range: [60, 150] },
            },
            lines: [
              {
                content: "Das Problem heißt {Rassismus!}",
                scale: { value: 100, range: [60, 150] },
              },
            ],
          },
          subline: {
            options: {
              min: 1,
              max: 1,
              defaultScale: { value: 100, range: [60, 150] },
            },
            lines: [
              {
                content: "Das Problem heißt {Rassismus!}",
                scale: { value: 100, range: [60, 150] },
              },
            ],
          },
        },
        ref: useRef(null),
      },
    ],
    templateScale: true,
  });

  return (
    <TemplateContext.Provider value={[state, setState]}>
      <TemplateLayout>
        <div className="col-span-3">
          <ControlsLeft />
        </div>
        <div className="col-span-6">
          <Template />
        </div>
        <div className="col-span-3">
          <ControlsRight />
        </div>
      </TemplateLayout>
    </TemplateContext.Provider>
  );
};
