import ColorThemesSelect from "../../components/colorThemesSelect";
import React from "react";

export default ({ state, setState }) => (
  <>
    <h2 className="controls">Farbauswahl</h2>
    <ColorThemesSelect state={state} setState={setState} />
  </>
);
