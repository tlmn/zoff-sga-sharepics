import React, { useRef } from "react";
import { formatEmojis, getColor } from "../../lib/lib";

import Draggable from "react-draggable";
import LogoArrow from "../../assets/svg/logo-arrow";

export default ({ state, setState }) => {
  const draggableRef = useRef(null);
  return (
    <div className="col-span-6 relative">
      <div
        className={`template ${
          state.templateScale ? `template-scale` : `relative`
        }`}
        style={{ backgroundColor: getColor(state, 0) }}
        ref={state.templateRef}
      >
        <Draggable
          onDrag={(e, data) => {
            setState({
              ...state,
              image: { ...state.image, position: { x: data.x, y: data.y } },
            });
          }}
          onStop={(e, data) => {
            draggableRef.current.style.transform = "translate(0px, 0px)";
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 w-full h-full z-10 cursor-pointer"
            draggable
            ref={draggableRef}
          />
        </Draggable>
        <div
          className="absolute top-0 left-0 right-0 z-20 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, rgba(196, 196, 196, 0) 69.27%)",
            mixBlendMode: "multiply",
            transform: "rotate(180deg)",
          }}
        />
        <div
          className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
          style={{
            backgroundImage: `url(${
              state.image.url !== null
                ? state.image.url
                : "/assets/images/olaf-scholz.jpg"
            })`,
            height: "100%",
            backgroundPositionX: `${state.image.position.x}px`,
            backgroundPositionY: `${state.image.position.y}px`,
            backgroundSize: `${state.image.scale * 10 + 100}%`,
          }}
        />
        <div className="p-4 // relative // h-full w-full // flex flex-col // border-1 // z-20 ">
          <div className="mb-3 flex-1 flex">
            <span
              className="block // w-full // self-center // text-center font-bold font-headline leading-none"
              style={{
                fontSize: `${(state.bodyTextScale / 100) * 140}px`,
                color: getColor(state, 1),
                transform: "rotate(-6deg)",
              }}
              dangerouslySetInnerHTML={{
                __html: formatEmojis(state.bodyText.replace(/\n/gi, `<br/>`)),
              }}
            />
          </div>
          <LogoArrow className="self-end" fillColor={getColor(state, 1)} />
        </div>
      </div>
    </div>
  );
};
