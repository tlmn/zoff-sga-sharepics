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
        dimensions: { width: 1080, height: 1080 },
        data: {
          background: {
            isImage: true,
          },
          image: {
            url: null,
            position: { x: 0, y: 0 },
            scale: 0,
          },
          body: {
            options: {
              colorTheme: "orange_white",
              bodyPositions: [
                { value: "self-start", label: "oben" },
                { value: "self-center", label: "mittig" },
                { value: "self-end", label: "unten" },
              ],
              linePositions: [
                { value: "self-start text-left", label: "links" },
                { value: "self-center text-center", label: "mittig" },
                { value: "self-end text-right", label: "rechts" },
              ],
              min: 1,
              max: 6,
              lineTemplate: {
                content: "Neue Textzeile",
                scale: { value: 70, range: [50, 140] },
                position: "self-start text-left",
              },
            },
            bodyPosition: "self-end",
            lines: [
              {
                content: "Evakuiert",
                scale: {
                  value: 110,
                  range: [50, 140],
                },
                position: "self-end text-right",
              },
              {
                content: "sofort",
                scale: {
                  value: 110,
                  range: [50, 140],
                },
                position: "self-center text-center",
              },
              {
                content: "die Lager!",
                scale: {
                  value: 90,
                  range: [50, 140],
                },
                position: "self-end text-right",
              },
            ],
          },
          logo: {
            options: {
              position: "self-center",
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
