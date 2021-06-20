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
          className={`flex flex-col absolute // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          } text-lg`}
          ref={state.slides[state.currentSlide].ref}
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
            {state.slides[0].data.logo.show && (
              <div className="flex flex-col justify-center items-center bg-orange p-3">
                <LogoText fillColor="#fff" />
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
                    }}
                    className="px-2 text-md"
                  >
                    {state.slides[0].data.logo.branch}
                  </span>
                )}
              </div>
            )}
            <div className="flex-1 flex px-3 text-white">
              <div className={`flex w-full items-center`}>
                <div className="flex flex-col w-full items-center">
                  {state.slides[state.currentSlide].data.body.lines.map(
                    (line) =>
                      line.content !== "" && (
                        <span
                          className={`font-sans ${
                            line.isBold ? `font-bold` : ``
                          }`}
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
          </div>
        </div>
      </div>
    </>
  );
};
