import React, { useContext } from "react";

import DraggableBG from "../../components/inputs/draggableBg";
import LogoText from "../../assets/svg/logo-text";
import TemplateContext from "../../components/templateContext";
import { getColor } from "../../lib/lib";

export default () => {
  const [state] = useContext(TemplateContext);

  return (
    <div className="col-span-6 sticky" style={{ top: "2rem" }}>
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
        {state.slides[0].data.background.isImage ? (
          <>
            <DraggableBG
              propertyPath={`slides[${state.currentSlide}].data.image.position`}
            />
            <div
              className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
              style={{
                backgroundImage: `url(${
                  state.slides[0].data.image.url !== null
                    ? state.slides[0].data.image.url
                    : "/assets/images/defaultImages/quote.png"
                })`,
                height: "100%",
                backgroundPositionX: `${state.slides[0].data.image.position.x}px`,
                backgroundPositionY: `${state.slides[0].data.image.position.y}px`,
                backgroundSize: `${
                  state.slides[0].data.image.scale * 10 + 100
                }%`,
              }}
            />
          </>
        ) : (
          <div
            style={{
              backgroundColor: getColor(
                state.slides[0].data.body.options.colorTheme,
                1
              ),
            }}
            className="w-full h-full"
          />
        )}

        <div className="w-full h-full absolute top-0 left-0 flex flex-col z-20 p-3">
          <div
            className={`${
              state.slides[state.currentSlide].data.logo.options.position
            } mb-3`}
          >
            <LogoText hasShadow />
          </div>
          <div className="flex-1 flex">
            <div
              className={`flex flex-col w-full ${state.slides[0].data.body.bodyPosition}`}
            >
              {state.slides[state.currentSlide].data.body.lines.map((line) => (
                <span
                  className={`inline-flex py-1 px-3 -my-1 font-sans font-bold ${line.position}`}
                  style={{
                    fontSize: `${line.scale.value}px`,
                    backgroundColor: getColor(
                      state.slides[0].data.body.options.colorTheme,
                      0
                    ),
                    color: getColor(
                      state.slides[0].data.body.options.colorTheme,
                      1
                    ),
                  }}
                >
                  {line.content}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
