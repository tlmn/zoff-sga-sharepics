import React, { useEffect } from "react";
import { formatEmojis, getColor } from "../../lib/lib";

import LogoText from "../../assets/svg/logo-text";

export default ({ state }) => {
  switch (state.currentSlide) {
    default:
      return (
        <div className="col-span-6 relative">
          <div
            className={`p-4 // flex flex-col absolute // border-1 // template ${
              state.templateScale ? `template-scale` : `relative`
            }`}
            style={{ backgroundColor: getColor(state, 0) }}
            ref={state.slides[state.currentSlide].templateRef}
          >
            <span
              className="mb-3 text-center text-xl font-bold font-headline"
              dangerouslySetInnerHTML={{
                __html:
                  state.slides[state.currentSlide].data.category.content === ""
                    ? "\u00a0"
                    : state.slides[state.currentSlide].data.category.content,
              }}
              style={{
                color: getColor(state, 1),
              }}
            />
            <div className="mb-3 flex-1 flex">
              <span
                className="block // w-full // self-center // text-center font-bold font-headline leading-none"
                style={{
                  fontSize: `${
                    (state.slides[state.currentSlide].data.body.scale / 100) *
                    140
                  }px`,
                  color: getColor(state, 1),
                }}
                dangerouslySetInnerHTML={{
                  __html: formatEmojis(
                    state.slides[state.currentSlide].data.body.content
                      .replace(
                        /\{/gi,
                        `<div class="stripeContainer"><div class="stripeText" style="color: ${getColor(
                          state,
                          0
                        )}">`
                      )
                      .replace(
                        /\}/gi,
                        `</div><div class="stripeElement" style="transform:rotate(${
                          Math.random() * 3 - 1.5
                        }deg); background-color: ${getColor(
                          state,
                          1
                        )}"></div></div>`
                      )
                      .replace(/\n/gi, `<br/>`)
                  ),
                }}
              />
            </div>
            <LogoText className="self-center" fillColor={getColor(state, 1)} />
            <div
              className="uppercase font-headline text-center text-md"
              style={{
                color: getColor(state, 1),
                transform: "rotate(-6deg)",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  state.slides[state.currentSlide].data.localBranch.content === ""
                    ? "\u00a0"
                    : state.slides[state.currentSlide].data.localBranch.content,
              }}
            />
          </div>
        </div>
      );
  }
};