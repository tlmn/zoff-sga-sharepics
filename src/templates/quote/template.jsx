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
          className={`flex flex-col absolute // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          } text-lg`}
          ref={state.slides[state.currentSlide].ref}
        >
          <DraggableBG
            propertyPath={`slides[${state.currentSlide}].data.image.position`}
          />
          <div
            className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
            style={{
              backgroundImage: `url(${
                state.slides[0].data.image.url !== null
                  ? state.slides[0].data.image.url
                  : "/assets/images/defaultImages/diskursintervention-mit-bild-1.jpg"
              })`,
              height: "100%",
              backgroundPositionX: `${state.slides[0].data.image.position.x}px`,
              backgroundPositionY: `${state.slides[0].data.image.position.y}px`,
              backgroundSize: `${state.slides[0].data.image.scale * 10 + 100}%`,
            }}
          />
          <div className="w-full h-full relative top-0 left-0 flex flex-col z-20">
            <div
              className={`${
                state.slides[state.currentSlide].data.logo.options.position
              }`}
            >
              <LogoText />
            </div>
            <div className="flex flex-col w-full">
              {state.slides[state.currentSlide].data.body.lines.map((line) => (
                <span
                  className={`block font-sans ${line.position}`}
                  style={{ fontSize: `${line.scale.value}px` }}
                >
                  {line.content}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
