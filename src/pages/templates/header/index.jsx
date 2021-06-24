import React, { useRef, useState } from "react";

import Controls from "../../../templates/header/controls";
import Template from "../../../templates/header/template";
import TemplateContext from "../../../components/templateContext";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        dimensions: { width: 1500, height: 500 },
        data: {
          logo: {
            show: true,
            branch: "",
          },
          body: {
            options: {
              colorTheme: "orange_white",
              min: 1,
              max: 3,
              lineTemplate: {
                content: "Neue Textzeile",
                scale: { value: 70, range: [50, 140] },
                isBold: false,
              },
            },
            lines: [
              {
                content: "Humanitäre Katastrophe in Bosnien!",
                scale: {
                  value: 110,
                  range: [50, 140],
                },
                isBold: true,
              },
              {
                content: "#wirhabenplatz",
                scale: {
                  value: 80,
                  range: [50, 140],
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
