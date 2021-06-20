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
        data: {
          body: {
            options: {
              colorTheme: "orange_white",
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
                  value: 110,
                  range: [50, 140],
                },
                isBold: true,
              },
              {
                content: "Zeit",
                scale: {
                  value: 110,
                  range: [50, 140],
                },
                isBold: true,
              },
              {
                content: "Veranstaltung",
                scale: {
                  value: 90,
                  range: [50, 140],
                },
                isBold: true,
              },
              {
                content: "Unterzeilen",
                scale: {
                  value: 90,
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
