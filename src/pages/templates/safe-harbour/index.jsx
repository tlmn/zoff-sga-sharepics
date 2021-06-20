import React, { useRef, useState } from "react";

import Controls from "../../../templates/safe-harbour/controls";
import Template from "../../../templates/safe-harbour/template";
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
              colorTheme: "orange_white",
              min: 1,
              max: 3,
              lineTemplate: {
                content: "Neue Textzeile",
                scale: { value: 70, range: [50, 140] },
              },
            },
            lines: [
              {
                content: "Sicherer Hafen",
                scale: {
                  value: 110,
                  range: [50, 140],
                },
              },
              {
                content: "Leipzig",
                scale: {
                  value: 110,
                  range: [50, 140],
                },
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
        <div className="col-span-6">
          <Template />
        </div>
        <div className="col-span-6">
          <Controls />
        </div>
      </TemplateLayout>
    </TemplateContext.Provider>
  );
};
