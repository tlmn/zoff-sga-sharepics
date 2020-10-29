import { formatEmojis, getColor } from "../../../lib/lib";

import React from "react";

export default ({ state, thumbnail = false }) => (
  <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
    <div
      className={`template ${
        state.templateScale && !thumbnail ? `template-scale` : `relative`
      }`}
      style={{ backgroundColor: getColor(state, 0) }}
      ref={!thumbnail ? state.slides[0].ref : null}
    >
      <div className="p-4 flex flex-col">
        <span
          className="mb-3 text-center text-xl font-bold font-headline uppercase"
          style={{
            color: getColor(state, 1),
          }}
          dangerouslySetInnerHTML={{
            __html:
              state.slides[0].data.statement.content === ""
                ? "\u00a0"
                : state.slides[0].data.statement.content,
          }}
        />
      </div>
    </div>
  </div>
);
