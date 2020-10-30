import { formatEmojis, getColor } from "../../../lib/lib";

import LogoText from "../../../assets/svg/logo-text";
import React from "react";

export default ({ state, thumbnail = false }) => (
  <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
    <div
      className={`p-4 // flex flex-col absolute // border-1 // template ${
        state.templateScale && !thumbnail ? `template-scale` : `relative`
      }`}
      style={{ backgroundColor: getColor(state, 1) }}
      ref={!thumbnail ? state.slides[2].ref : null}
    >
      <div className="flex h-full">
        <span
          className="block flex-1 // w-full // self-start // text-left font-bold font-headline leading-tight"
          style={{
            fontSize: `${(state.slides[2].data.body.scale / 100) * 80}px`,
            color: getColor(state, 0),
          }}
          dangerouslySetInnerHTML={{
            __html: formatEmojis(
              state.slides[2].data.body.content.replace(/\n/gi, `<br/>`)
            ),
          }}
        />
      </div>
      <div className="flex justify-center w-full">
        <LogoText fillColor={getColor(state, 0)} className="" />
      </div>
    </div>
  </div>
);
