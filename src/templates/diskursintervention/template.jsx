import React, { useRef, useState } from "react";

import Cockpit from "./cockpit";
import LogoText from "../../assets/svg/logo-text";
import { getColor } from "../../lib/lib";

export default () => {
  const [state, setState] = useState({
    categoryText: "Kategorie",
    bodyText: "Lorem Ipsum is simply!!",
    bodyTextScale: 100,
    bodyTextScaleRange: [60, 150],
    colorCombination: "darkGray_turquoise",
    templateRef: useRef(null),
    templateScale: true,
  });

  return (
    <>
      <div className="col-span-6 relative">
        <div
          className={`p-4 // flex flex-col absolute // border-1 // template ${
            state.templateScale && `template-scale`
          }`}
          style={{ backgroundColor: getColor(state, 0) }}
          ref={state.templateRef}
        >
          <span
            className="mb-3 text-center text-md uppercase font-bold font-headline"
            dangerouslySetInnerHTML={{
              __html: state.categoryText === "" ? "\u00a0" : state.categoryText,
            }}
            style={{
              color: getColor(state, 1),
            }}
          />
          <div className="mb-3 flex-1 flex">
            <span
              className="block // overflow-hidden // w-full // self-center // text-center font-bold font-headline leading-none"
              style={{
                fontSize: `${(state.bodyTextScale / 100) * 140}px`,
                color: getColor(state, 1),
              }}
              dangerouslySetInnerHTML={{
                __html: state.bodyText,
              }}
            />
          </div>
          <LogoText className="self-center" fillColor={getColor(state, 1)} />
        </div>
      </div>
      <div className="col-span-4 col-start-9">
        <Cockpit setState={setState} state={state} />
      </div>
    </>
  );
};
