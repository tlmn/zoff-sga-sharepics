import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/diskursintervention/controlsLeft";
import ControlsRight from "../../../templates/diskursintervention/controlsRight";
import Template from "../../../templates/diskursintervention/template";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          category: { content: "So komplex und doch so einfach" },
          body: {
            content: "Das Problem heißt {Rassismus!}",
            scale: { value: 100, range: [60, 150] },
          },
          localBranch: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "turquoise_darkGray",
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
