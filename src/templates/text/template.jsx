import React, { useContext } from "react";

import LogoText from "../../assets/svg/logo-text";
import TemplateContext from "../../components/templateContext";
import { getColor } from "../../lib/lib";

export default () => {
  const [state] = useContext(TemplateContext);
  return (
    <>
      <div className="col-span-6 relative">
        <div
          className={`flex flex-col absolute // border-1 // ${
            state.templateScale ? `template-scale` : `relative`
          } text-lg`}
          ref={state.slides[state.currentSlide].ref}
          style={{
            width: `${state.slides[state.currentSlide].dimensions.width}px`,
            height: `${state.slides[state.currentSlide].dimensions.height}px`,
          }}
        >
          <div
            className="w-full h-full absolute top-0 left-0 flex flex-col z-20"
            style={{
              backgroundColor: getColor(
                state.slides[0].data.body.options.colorTheme,
                0
              ),
            }}
          >
            <div className="flex-1 flex px-3 text-white">
              <div className={`flex w-full items-center`}>
                <div
                  className={`flex flex-col w-full items-${
                    state.slides[state.currentSlide].data.body.options
                      .textAlign === "textCenter"
                      ? `center`
                      : `start`
                  }`}
                >
                  {state.slides[state.currentSlide].data.body.lines.map(
                    (line) =>
                      line.content !== "" && (
                        <span
                          className={`font-sans ${
                            line.isBold ? `font-bold` : ``
                          } ${
                            state.slides[state.currentSlide].data.body.options
                              .textAlign === "textCenter"
                              ? `text-center`
                              : `text-left`
                          } leading-tight`}
                          style={{
                            fontSize: `${line.scale.value}px`,
                          }}
                        >
                          {line.content}
                        </span>
                      )
                  )}
                </div>
              </div>
            </div>
            {state.slides[0].data.logo.show && (
              <div className="flex flex-col justify-center items-center p-3 mb-2">
                <LogoText fillColor="#fff" hasShadow />
                {state.slides[0].data.logo.branch !== "" && (
                  <span
                    style={{
                      backgroundColor: getColor(
                        state.slides[0].data.body.options.colorTheme,
                        1
                      ),
                      color: getColor(
                        state.slides[0].data.body.options.colorTheme,
                        0
                      ),
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
                    }}
                    className="px-2 text-md tracking-wider"
                  >
                    {state.slides[0].data.logo.branch}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
