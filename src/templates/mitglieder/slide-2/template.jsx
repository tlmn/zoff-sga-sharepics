import LogoText from "../../../assets/svg/logo-text";
import React from "react";
import { getColor } from "../../../lib/lib";

export default ({ state, setState, thumbnail = false }) => (
  <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
    <div
      className={`template ${
        state.templateScale && !thumbnail ? `template-scale` : `relative`
      }`}
      style={{ backgroundColor: getColor(state, 1) }}
      ref={!thumbnail ? state.slides[2].ref : null}
    >
      <div className="p-4 flex flex-col h-full">
        <span
          className="flex-1 text-left font-headline uppercase italic leading-tight"
          style={{
            color: getColor(state, 0),
            fontSize: `${(state.slides[2].data.body.scale / 100) * 140}px`,
          }}
          dangerouslySetInnerHTML={{
            __html: state.slides[2].data.body.content,
          }}
        />
        <div className="flex justify-center">
          <LogoText fillColor={getColor(state, 0)} />
        </div>
      </div>
    </div>
  </div>
);