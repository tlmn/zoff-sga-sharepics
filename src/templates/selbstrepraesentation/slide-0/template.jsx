import { formatEmojis, getColor } from "../../../lib/lib";

import React from "react";

export default ({ state, thumbnail = false }) => {
  switch (state.currentSlide) {
    default:
      return (
        <div className="col-span-6 relative">
          <div
            className={`p-4 // flex flex-col absolute // border-1 // template ${
              state.templateScale ? `template-scale` : `relative`
            }`}
            style={{ backgroundColor: getColor(state, 0) }}
            ref={!thumbnail ? state.slides[state.currentSlide].ref : null}
          >
            <div
              className="mt-3 flex-1 text-left // font-headline text-lg italic font-bold uppercase"
              dangerouslySetInnerHTML={{
                __html:
                  state.slides[state.currentSlide].data.body.content === ""
                    ? "\u00a0"
                    : state.slides[state.currentSlide].data.body.content,
              }}
              style={{
                color: getColor(state, 1),
              }}
            />
          </div>
        </div>
      );
  }
};
