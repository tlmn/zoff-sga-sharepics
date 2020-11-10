import ColorSelect from "../../components/inputs/colorSelect";
import React from "react";

export default ({ state, setState }) => (
  <>
    <h2 className="controls">Farbauswahl</h2>
    <ColorSelect state={state} setState={setState} />
  </>
);
