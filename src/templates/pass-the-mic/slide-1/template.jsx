import React from "react";
import { getPrimaryColor } from "../../../lib/lib";

export default ({ state, setState, thumbnail = false }) => (
  <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
    <div
      className={`template ${
        state.templateScale && !thumbnail ? `template-scale` : `relative`
      }`}
      ref={!thumbnail ? state.slides[1].ref : null}
    >
      <span
        className="w-full block absolute bottom-0 py-2 font-body text-lg text-center text-darkGray uppercase"
        style={{ backgroundColor: getPrimaryColor(state) }}
        dangerouslySetInnerHTML={{
          __html: state.slides[1].data.author.content,
        }}
      />
    </div>
  </div>
);
