import { formatEmojis, getColor } from "../../../lib/lib";

import LogoArrow from "../../../assets/svg/logo-arrow";
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
            <div className="flex">
              <span
                className="block // w-full // self-center // text-left italic font-bold font-headline leading-none"
                style={{
                  fontSize: `${
                    (state.slides[state.currentSlide].data.body.scale / 100) *
                    80
                  }px`,
                  color: getColor(state, 1),
                }}
                dangerouslySetInnerHTML={{
                  __html: formatEmojis(
                    state.slides[state.currentSlide].data.body.content.replace(
                      /\n/gi,
                      `<br/>`
                    )
                  ),
                }}
              />
            </div>
            <LogoArrow fillColor={getColor(state, 1)} />
          </div>
        </div>
      );
  }
};
