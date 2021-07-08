import React, { useRef, useState } from "react";

import Controls from "../../../templates/image-statement/controls";
import Template from "../../../templates/image-statement/template";
import TemplateContext from "../../../components/templateContext";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        dimensions: { width: 1080, height: 1080 },
        data: {
          body: {
            options: {
              colorTheme: "orange_white",
              min: 3,
              max: 4,
              lineTemplate: {
                inputType: "input",
                content: "Neue Textzeile",
                scale: { value: 70, range: [50, 140] },
              },
            },
            lines: [
              {
                inputType: "input",
                content: "Sicherer ",
                scale: {
                  value: 90,
                  range: [70, 115],
                },
              },
              {
                inputType: "input",
                content: "Hafen",
                scale: {
                  value: 90,
                  range: [70, 115],
                },
              },
              {
                inputType: "input",
                content: "Leipzig",
                scale: {
                  value: 200,
                  range: [160, 220],
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
