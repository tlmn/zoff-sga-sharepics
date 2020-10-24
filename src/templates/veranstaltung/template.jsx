import { formatEmojis, getColor } from "../../lib/lib";

import BreakerLine from "../../assets/svg/breakerline";
import LogoArrow from "../../assets/svg/logo-arrow";
import React from "react";

export default ({ state }) => {
  return (
    <div className="col-span-6 relative">
      <div
        className={`// flex flex-col absolute // border-1 // template ${
          state.templateScale ? `template-scale` : `relative`
        }`}
        style={{ backgroundColor: getColor(state, 0) }}
        ref={state.templateRef}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col flex-1 px-4 pt-4">
            <span
              className="mb-3 text-center text-xl font-bold font-headline uppercase w-full block"
              dangerouslySetInnerHTML={{
                __html: state.typeText === "" ? "\u00a0" : state.typeText,
              }}
              style={{
                color: getColor(state, 1),
              }}
            />
            <span
              className="block // w-full // self-center // text-left font-bold font-headline leading-none"
              style={{
                fontSize: `${(state.eventTextScale / 100) * 80}px`,
                color: getColor(state, 1),
              }}
              dangerouslySetInnerHTML={{
                __html: formatEmojis(state.eventText.replace(/\n/gi, `<br/>`)),
              }}
            />
            <div
              className="mt-3 flex-1 text-left // font-headline text-lg font-bold"
              dangerouslySetInnerHTML={{
                __html: state.speakerText === "" ? "\u00a0" : state.speakerText,
              }}
              style={{
                color: getColor(state, 1),
              }}
            />
          </div>

          <BreakerLine
            fillColor={getColor(state, 1)}
            className="absolute bottom-0 left-0 z-10"
          />
          <div className="flex flex-col p-4 relative">
            <span
              className="w-full z-20 // text-left text-lg font-bold font-headline uppercase leading-normal"
              style={{
                color: getColor(state, 0),
              }}
              dangerouslySetInnerHTML={{
                __html: formatEmojis(
                  state.locationText.replace(/\n/gi, `<br/>`)
                ),
              }}
            />
            <span
              className="w-full z-20 // text-left text-lg font-bold font-headline uppercase leading-normal"
              style={{
                color: getColor(state, 0),
              }}
              dangerouslySetInnerHTML={{
                __html: formatEmojis(state.dateText.replace(/\n/gi, `<br/>`)),
              }}
            />
            <LogoArrow fillColor={getColor(state, 0)} className="absolute right-0 mr-4 bottom-0 mb-4 z-20" />
          </div>
        </div>
      </div>
    </div>
  );
};
