import ControlsRight0 from "./slide-0/controlsRight";
import ControlsRight1 from "./slide-1/controlsRight";
import React from "react";

export default ({ state, setState }) => {
  switch (state.currentSlide) {
    case 0:
      return <ControlsRight0 state={state} setState={setState} />;
    case 1:
      return <ControlsRight1 state={state} setState={setState} />;
    default:
      return <ControlsRight0 state={state} setState={setState} />;
  }
};
