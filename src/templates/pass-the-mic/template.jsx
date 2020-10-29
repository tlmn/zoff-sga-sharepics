import React from "react";
import Template0 from "./slide-0/template"
import Template1 from "./slide-1/template"

export default ({ state, setState }) => {
  switch (state.currentSlide) {
    case 0:
      return <Template0 state={state} setState={setState} />;
    case 1:
      return <Template1 state={state} setState={setState} />;
    default:
      return <Template0 state={state} setState={setState} />;
  }
};
