import { formatEmojis, getColor } from "../../../lib/lib";

import React from "react";

export default ({ state, thumbnail = false }) => (
  <div className={`${!thumbnail ? `col-span-6` : `col-span-4`} relative`}>
    <div
      className={`p-4 // flex flex-col absolute // border-1 // template ${
        state.templateScale && !thumbnail ? `template-scale` : `relative`
      }`}
      style={{ backgroundColor: getColor(state, 0) }}
      ref={!thumbnail ? state.slides[0].ref : null}
    >
      <div
        className="mt-3 flex-1 text-left // font-headline text-lg italic font-bold uppercase"
        dangerouslySetInnerHTML={{
          __html:
            state.slides[0].data.body.content === ""
              ? "\u00a0"
              : formatEmojis(state.slides[0].data.body.content),
        }}
        style={{
          color: getColor(state, 1),
        }}
      />
    </div>
  </div>
);
