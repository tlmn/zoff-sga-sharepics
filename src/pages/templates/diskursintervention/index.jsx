import Cockpit from "../../../templates/diskursintervention/cockpit";
import React from "react";
import { StoreProvider } from "../../../lib/store";
import Template from "../../../templates/diskursintervention/template";

export default () => {
  return (
    <StoreProvider>
      <div className="container grid-12">
        <Template />
      </div>
    </StoreProvider>
  );
};
