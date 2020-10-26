import Controls0 from "./slide-0/controls";
import Controls1 from "./slide-1/controls";
import Controls2 from "./slide-2/controls";
import React from "react";

export default ({ state, setState }) => {
  switch (state.currentSlide) {
    case 0:
      return <Controls0 state={state} setState={setState} />;
    case 1:
      return <Controls1 state={state} setState={setState} />;
    case 2:
      return <Controls2 state={state} setState={setState} />;
    default:
      return <Controls0 state={state} setState={setState} />;
  }
};
