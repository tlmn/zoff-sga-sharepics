import React, { useRef, useState } from "react";

import Controls from "../../../templates/quote/controls";
import Template from "../../../templates/quote/template";
import TemplateContext from "../../../components/templateContext";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          image: {
            url: null,
            position: { x: 0, y: 0 },
            scale: 0,
          },
          body: {
            options: {
              positions: [
                { value: "self-start text-left", label: "links" },
                { value: "self-center text-center", label: "mittig" },
                { value: "self-end text-right", label: "rechts" },
              ],
              min: 1,
              max: 6,
              lineTemplate: {
                content: "Das Problem heißt {Rassismus!}",
                scale: { value: 50, range: [30, 70] },
                position: "self-start text-left",
              },
            },
            lines: [
              {
                content: "Das Problem heißt {Rassismus!}",
                scale: {
                  value: 50,
                  range: [30, 70],
                  position: "self-start text-left",
                },
              },
            ],
          },
          logo: {
            options: {
              position: "self-end",
              positions: [
                { value: "self-end", label: "rechts" },
                { value: "self-center", label: "mitte" },
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
