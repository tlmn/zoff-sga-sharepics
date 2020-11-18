import React, { useRef } from "react";
import { getColor, getProperty, updateProperty } from "../../../lib/lib";

import Draggable from "react-draggable";

export default ({ state, setState, thumbnail = false }) => {
  const draggableRef = useRef(null);
  return (
    <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
      <div
        className={`template ${
          state.templateScale && !thumbnail ? `template-scale` : `relative`
        }`}
        style={{ backgroundColor: getColor(state, 0) }}
        ref={!thumbnail ? state.slides[0].ref : null}
      >
        <div className="p-4 flex flex-col items-center h-full justify-end">
          <Draggable
            onDrag={(e, data) => {
              setState({
                ...state,
                ...state.slides.splice(0, 1, {
                  ...state.slides[0],
                  data: {
                    ...state.slides[0].data,
                    image: {
                      ...state.slides[0].data.image,
                      position: { x: data.x, y: data.y },
                    },
                  },
                }),
              });
            }}
            onStop={(e, data) => {
              draggableRef.current.style.transform = "translate(0px, 0px)";
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 w-full h-full z-20 cursor-pointer"
              draggable
              ref={draggableRef}
            />
          </Draggable>
          <div
            className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
            style={{
              backgroundImage: `url(${
                state.slides[0].data.image.url !== null
                  ? state.slides[0].data.image.url
                  : "/assets/images/defaultImages/mitglieder-0.jpg"
              })`,
              height: "100%",
              filter: "grayscale(100%)",
              backgroundPositionX: `${state.slides[0].data.image.position.x}px`,
              backgroundPositionY: `${state.slides[0].data.image.position.y}px`,
              backgroundSize: `${state.slides[0].data.image.scale * 10 + 100}%`,
            }}
          />
          <div
            className="stripeContainer z-40 mb-3"
            style={{
              transform: "rotate(-6deg)",
            }}
          >
            <span
              className="stripeText text-center text-xl font-bold font-headline uppercase"
              style={{
                color: getColor(state, 1),
              }}
              dangerouslySetInnerHTML={{
                __html:
                  state.slides[0].data.statement.content === ""
                    ? "\u00a0"
                    : state.slides[0].data.statement.content,
              }}
            />
            <div
              className="stripeElement"
              style={{ backgroundColor: getColor(state, 0) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
