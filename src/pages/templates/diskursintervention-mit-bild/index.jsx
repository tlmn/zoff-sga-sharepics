import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/diskursintervention-mit-bild/controlsLeft";
import ControlsRight from "../../../templates/diskursintervention-mit-bild/controlsRight";
import Template from "../../../templates/diskursintervention-mit-bild/template";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
          body: {
            content: "SPD: Oops, I did it again!",
            scale: { value: 100, range: [60, 150] },
            textPosition: "end",
          },
          localBranch: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "red_violet",
    templateScale: true,
  });

  return (
    <TemplateLayout>
      <div className="col-span-3">
        <ControlsLeft state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <Template state={state} setState={setState} />
      </div>
      <div className="col-span-3">
        <ControlsRight state={state} setState={setState} />
      </div>
    </TemplateLayout>
  );
};
