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
              position: "items-center",
              positions: [
                { value: "items-start", label: "oben" },
                { value: "items-center", label: "mittig" },
                { value: "items-end", label: "unten" },
              ],
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
            content: "Das Problem heißt {Rassismus!}",
            scale: { value: 100, range: [60, 150] },
          },
          logo: {
            options: {
              position: "top-right",
              positions: [
                { value: "top-right", label: "oben rechts" },
                { value: "bottom-center", label: "unten mitte" },
              ],
            },
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
