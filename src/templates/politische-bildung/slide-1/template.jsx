import React from "react";
import { getPrimaryColor } from "../../../lib/lib";

export default ({ state, setState, thumbnail = false }) => (
  <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
    <div
      className={`template ${
        state.templateScale && !thumbnail ? `template-scale` : `relative`
      }`}
      style={{ backgroundColor: getPrimaryColor(state) }}
      ref={!thumbnail ? state.slides[1].ref : null}
    >
      <div className="p-4 flex flex-col h-full">
        <span
          className="flex-1 font-body font-semibold text-lg text-left text-black"
          dangerouslySetInnerHTML={{
            __html: state.slides[1].data.body.content,
          }}
        />
      </div>
    </div>
  </div>
);
