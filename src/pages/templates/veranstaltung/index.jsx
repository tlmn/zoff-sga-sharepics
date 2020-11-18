import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/veranstaltung/controlsLeft";
import ControlsRight from "../../../templates/veranstaltung/controlsRight";
import Template from "../../../templates/veranstaltung/template";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          type: { content: "Vortrag" },
          event: {
            content: "Auf der Fury Road in den Feminismus!",
            scale: { range: [100, 180], value: 140 },
          },
          speaker: { content: "Veronika Kracher" },
          location: { content: "Ort" },
          date: { content: "Datum" },
          localBranch: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "darkGray_turquoise",
    templateScale: true,
  });

  return (
    <TemplateLayout>
      <div className="col-span-3">
        <ControlsLeft state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <Template state={state} />
      </div>
      <div className="col-span-3">
        <ControlsRight state={state} setState={setState} />
      </div>
    </TemplateLayout>
  );
};
