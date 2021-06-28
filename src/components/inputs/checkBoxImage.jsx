import { getProperty, updateProperty } from "../../lib/lib";
import { useContext, useRef } from "react";

import FontBoldIcon from "../../assets/svg/fontBold";
import React from "react";
import TemplateContext from "../templateContext";
import { theme } from "../../../tailwind.config";

const CheckBoxImage = ({
  propertyPath,
  disabled = false,
  type = "fontBold",
}) => {
  const { colors } = theme;
  const [state, setState] = useContext(TemplateContext);
  const ref = useRef(null);
  const icons = {
    fontBold: (fillColor) => <FontBoldIcon fillColor={fillColor} />,
  };
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={propertyPath}
        checked={getProperty({ state }, propertyPath)}
        onChange={() =>
          updateProperty(
            { setState },
            propertyPath,
            !getProperty({ state }, propertyPath)
          )
        }
        disabled={disabled}
        className="hidden"
        ref={ref}
      />
      <label htmlFor={propertyPath} className="cursor-pointer">
        {icons[type](
          getProperty({ state }, propertyPath) ? colors.orange : colors.white
        )}
      </label>
    </div>
  );
};
export default CheckBoxImage;
