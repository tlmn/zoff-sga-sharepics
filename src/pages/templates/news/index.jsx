import React, { useRef, useState } from "react";

import Controls from "../../../templates/news/controls";
import Template from "../../../templates/news/template";
import TemplateContext from "../../../components/templateContext";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          images: {
            upper: {
              url: null,
              position: { x: 0, y: 0 },
              scale: 0,
            },
            lower: { url: null, position: { x: 0, y: 0 }, scale: 0 },
            onlyOneImage: false,
          },
          body: {
            options: {
              min: 1,
              max: 2,
              lineTemplate: {
                content: "Das Problem heißt {Rassismus!}",
                scale: { value: 50, range: [30, 70] },
              },
            },
            lines: [
              {
                content: "Das Problem heißt {Rassismus!}",
                scale: { value: 50, range: [30, 70] },
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
          logo: {
            position: "top-right",
            positions: ["top-right", "bottom-center"],
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
