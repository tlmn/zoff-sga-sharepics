import React, { useContext } from "react";
import { getProperty, pushProperty, removeProperty } from "../../lib/lib";

import Input from "../inputs/input";
import TemplateContext from "../templateContext";
import TextScale from "./textScale";

const InputRepeater = ({ propertyPath, label = "" }) => {
  const [state, setState] = useContext(TemplateContext);
  const lines = getProperty({ state }, `${propertyPath}.lines`);
  const lineTemplate = getProperty(
    { state },
    `${propertyPath}.options.lineTemplate`
  );
  return (
    <>
      {label !== "" && <label htmlFor={propertyPath}>{label}</label>}
      <div id={propertyPath}>
        {lines.map((line, index) => (
          <div className="flex">
            <Input
              propertyPath={`${propertyPath}.lines[${index}].content`}
              className="mr-2"
            />
            <TextScale
              propertyPath={`${propertyPath}.lines[${index}].scale`}
              label=""
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 my-2">
        <button
          onClick={() => {
            getProperty({ state }, `${propertyPath}.options.max`) >
              lines.length &&
              pushProperty({ setState }, `${propertyPath}.lines`, lineTemplate);
          }}
          disabled={
            getProperty({ state }, `${propertyPath}.options.max`) < lines.length
          }
          className="btn not-italic"
        >
          +
        </button>
        <button
          onClick={() => {
            getProperty({ state }, `${propertyPath}.options.min`) <
              lines.length &&
              removeProperty({ setState }, `${propertyPath}.lines`);
          }}
          disabled={
            getProperty({ state }, `${propertyPath}.options.min`) > lines.length
          }
          className="btn not-italic"
        >
          -
        </button>
      </div>
    </>
  );
};

export default InputRepeater;
