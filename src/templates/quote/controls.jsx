import React, { useContext, useEffect } from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import BgImage from "../../components/inputs/bgImage";
import CheckBox from "../../components/inputs/checkbox";
import CustomSelect from "../../components/inputs/customSelect";
import DownloadButton from "../../components/inputs/downloadButton";
import Input from "../../components/inputs/input";
import InputRepeater from "../../components/inputs/inputRepeater";
import TemplateContext from "../../components/templateContext";
import TextScale from "../../components/inputs/textScale";

export default () => {
  const currentSlide = 0;
  const [state, setState] = useContext(TemplateContext);

  return (
    <>
      <BgImage
        propertyPath={`slides[${currentSlide}].data.image`}
        label="Bild"
      />

      <CustomSelect
        options={state.slides[currentSlide].data.logo.options.positions}
        propertyPath={`slides[${currentSlide}].data.logo.options.position`}
        label="Position Logo"
      />

      <InputRepeater
        propertyPath={`slides[${currentSlide}].data.body`}
        label="Text"
        selectPosition
        positionOptions={state.slides[currentSlide].data.body.options.positions}
      />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
