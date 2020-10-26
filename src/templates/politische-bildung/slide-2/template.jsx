import LogoText from "../../../assets/svg/logo-text";
import React from "react";
import { getColor } from "../../../lib/lib";

export default ({ state, setState, thumbnail = false }) => (
  <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
    <div
      className={`template ${
        state.templateScale && !thumbnail ? `template-scale` : `relative`
      }`}
      style={{ backgroundColor: getColor(state, 0) }}
      ref={!thumbnail ? state.slides[2].ref : null}
    >
      <div className="p-4 flex flex-col h-full">
        <span
          className="flex-1 text-left font-body text-lg"
          dangerouslySetInnerHTML={{
            __html: state.slides[2].data.body.content,
          }}
        />
        <div className="flex justify-center">
          <LogoText fillColor={getColor(state, 1)} />
        </div>
      </div>
    </div>
  </div>
);
