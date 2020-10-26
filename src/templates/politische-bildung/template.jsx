import React from "react";
import Template0 from "./slide-0/template"
import Template1 from "./slide-1/template"
import Template2 from "./slide-2/template"

export default ({ state, setState }) => {
  switch (state.currentSlide) {
    case 0:
      return <Template0 state={state} setState={setState} />;
    case 1:
      return <Template1 state={state} setState={setState} />;
    case 2:
      return <Template2 state={state} setState={setState} />;
    default:
      return <Template0 state={state} setState={setState} />;
  }
};
