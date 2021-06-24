import React, { useRef, useState } from "react";

import Controls from "../../../templates/action/controls";
import Template from "../../../templates/action/template";
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
              colorTheme: "turquoise_black",
              min: 1,
              max: 6,
              lineTemplate: {
                content: "Neue Textzeile",
                scale: { value: 70, range: [50, 140] },
                isBold: false,
              },
            },
            lines: [
              {
                content: "Stadt",
                scale: {
                  value: 150,
                  range: [120, 220],
                },
                isBold: true,
              },
              {
                content: "30. Januar 2021",
                scale: {
                  value: 90,
                  range: [70, 100],
                },
                isBold: true,
              },
              {
                content: "Demo",
                scale: {
                  value: 90,
                  range: [50, 140],
                },
                isBold: true,
              },
              {
                content: "#wirhabenplatz",
                scale: {
                  value: 50,
                  range: [40, 65],
                },
                isBold: false,
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
