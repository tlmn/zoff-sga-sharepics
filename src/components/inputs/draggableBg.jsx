import React, { useEffect, useRef } from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import Draggable from "react-draggable";

export default ({ state, setState, propertyPath }) => {
  const refDraggable = useRef(null);
  return (
    <>
      <Draggable
        onStart={(e, data) => {
          updateProperty({ state, setState }, propertyPath, {
            x: data.x,
            y: data.y,
          });
        }}
        onDrag={(e, data) => {
          updateProperty({ state, setState }, propertyPath, {
            x: data.x,
            y: data.y,
          });
        }}
        onStop={() => {
          refDraggable.current.style.transform = "translate(0px, 0px)";
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 w-full h-full z-50 cursor-move"
          ref={refDraggable}
        />
      </Draggable>
    </>
  );
};
