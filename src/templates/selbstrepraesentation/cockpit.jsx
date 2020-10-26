import Cockpit0 from "./slide-0/cockpit";
import Cockpit1 from "./slide-1/cockpit";
import Cockpit2 from "./slide-2/cockpit";
import React from "react";

export default ({ state, setState }) => {
  switch (state.currentSlide) {
    case 0:
      return <Cockpit0 state={state} setState={setState} />;
    case 1:
      return <Cockpit1 state={state} setState={setState} />;
    case 2:
      return <Cockpit2 state={state} setState={setState} />;
    default:
      return <Cockpit0 state={state} setState={setState} />;
  }
};
