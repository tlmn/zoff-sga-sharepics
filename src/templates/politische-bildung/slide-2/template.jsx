import LogoText from "../../../assets/svg/logo-text";
import React from "react";
import { getPrimaryColor } from "../../../lib/lib";

export default ({ state, thumbnail = false }) => (
  <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
    <div
      className={`template ${
        state.templateScale && !thumbnail ? `template-scale` : `relative`
      }`}
      style={{ backgroundColor: getPrimaryColor(state) }}
      ref={!thumbnail ? state.slides[2].ref : null}
    >
      <div className="p-4 flex flex-col h-full">
        <span
          className="flex-1 text-left font-body font-semibold text-lg text-black"
          dangerouslySetInnerHTML={{
            __html: state.slides[2].data.body.content,
          }}
        />
        <div className="flex flex-col justify-center w-full">
          <div className="w-full flex justify-center">
            <LogoText fillColor="#000" />
          </div>
          <div
            className="uppercase font-headline text-center text-md leading-none mt-2 text-black"
            style={{
              transform: "rotate(-6deg)",
            }}
            dangerouslySetInnerHTML={{
              __html:
                state.slides[2].data.localBranch.content === ""
                  ? "\u00a0"
                  : state.slides[2].data.localBranch.content.replace(
                      /\n/gi,
                      `<br/>`
                    ),
            }}
          />
        </div>
      </div>
    </div>
  </div>
);
