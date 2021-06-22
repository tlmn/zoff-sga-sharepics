import React, { useContext } from "react";
import { formatEmojis, getColor } from "../../lib/lib";

import DraggableBG from "../../components/inputs/draggableBg";
import LogoText from "../../assets/svg/logo-text";
import TemplateContext from "../../components/templateContext";

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
          <div className="flex flex-col w-full h-full bg-white absolute top-0 left-0">
            <div className="flex-1">
              <DraggableBG
                propertyPath={`slides[${state.currentSlide}].data.images.upper.position`}
              />
            </div>
            {!state.slides[state.currentSlide].data.images.onlyOneImage && (
              <div className="flex-1">
                <DraggableBG
                  propertyPath={`slides[${state.currentSlide}].data.images.lower.position`}
                />
              </div>
            )}
          </div>
          <div className="w-full h-full relative">
            <div
              className={`flex flex-col w-full h-full absolute top-0 left-0 z-20`}
            >
              <div
                className={`flex-1 flex ${
                  state.slides[state.currentSlide].data.logo.options
                    .position === "top-right" &&
                  `justify-end items-start mr-3 mt-3`
                } ${
                  state.slides[state.currentSlide].data.logo.options
                    .position === "bottom-center" &&
                  `justify-center items-end mb-3`
                }`}
              >
                <LogoText fillColor="#fff" hasShadow />
              </div>
            </div>
            <div className="flex flex-col w-full h-full absolute top-0 left-0">
              <div className="flex-1">
                <div
                  className="relative // top-0 left-0 right-0 // z-10 // w-full h-full"
                  style={{
                    backgroundImage: `url(${
                      state.slides[0].data.images.upper.url !== null
                        ? state.slides[0].data.images.upper.url
                        : "/assets/images/defaultImages/news-1.png"
                    })`,
                    height: "100%",
                    backgroundPositionX: `${state.slides[0].data.images.upper.position.x}px`,
                    backgroundPositionY: `${state.slides[0].data.images.upper.position.y}px`,
                    backgroundSize: `${
                      state.slides[0].data.images.upper.scale * 10 + 100
                    }%`,
                  }}
                />
              </div>
              {!state.slides[state.currentSlide].data.images.onlyOneImage && (
                <div className="flex-1">
                  <div
                    className="relative // top-0 left-0 right-0 // z-10 // w-full h-full"
                    style={{
                      backgroundImage: `url(${
                        state.slides[0].data.images.lower.url !== null
                          ? state.slides[0].data.images.lower.url
                          : "/assets/images/defaultImages/news-2.png"
                      })`,
                      height: "100%",
                      backgroundPositionX: `${state.slides[0].data.images.lower.position.x}px`,
                      backgroundPositionY: `${state.slides[0].data.images.lower.position.y}px`,
                      backgroundSize: `${
                        state.slides[0].data.images.lower.scale * 10 + 100
                      }%`,
                    }}
                  />
                </div>
              )}
            </div>
            <div
              className={`relative z-10  w-full h-full flex justify-center ${state.slides[0].data.body.options.position}`}
            >
              <div className="w-full">
                <div
                  className="w-full py-2"
                  style={{
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
                  {state.slides[0].data.body.lines.map((line) => (
                    <span
                      className="block text-center font-sans font-bold px-2"
                      style={{
                        fontSize: `${line.scale.value}px`,
                      }}
                    >
                      {line.content}
                    </span>
                  ))}
                </div>
                {state.slides[0].data.subline.content !== "" && (
                  <div
                    className="py-2"
                    style={{
                      backgroundColor: getColor(
                        state.slides[0].data.subline.colorTheme,
                        0
                      ),
                      color: getColor(
                        state.slides[0].data.subline.colorTheme,
                        1
                      ),
                    }}
                  >
                    <span
                      className="block text-center font-sans font-bold"
                      style={{
                        fontSize: `${state.slides[0].data.subline.scale.value}px`,
                      }}
                    >
                      {state.slides[0].data.subline.content}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
