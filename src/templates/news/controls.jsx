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

  useEffect(() => {
    if (
      state.slides[currentSlide].data.body.options.position === "items-start"
    ) {
      updateProperty(
        { setState },
        `slides[${currentSlide}].data.images.onlyOneImage`,
        true
      );

      updateProperty(
        { setState },
        `slides[${currentSlide}].data.logo.options.position`,
        "bottom-center"
      );
    }

    if (state.slides[currentSlide].data.body.options.position === "items-end") {
      updateProperty(
        { setState },
        `slides[${currentSlide}].data.images.onlyOneImage`,
        true
      );

      updateProperty(
        { setState },
        `slides[${currentSlide}].data.logo.options.position`,
        "top-right"
      );
    }
  }, [state.slides[currentSlide].data.body.options.position]);

  return (
    <>
      <CheckBox
        propertyPath={`slides[${currentSlide}].data.images.onlyOneImage`}
        value={state.slides[currentSlide].data.images.onlyOneImage}
        label="nur ein Bild"
        disabled={
          state.slides[currentSlide].data.body.options.position ===
            "items-start" ||
          state.slides[currentSlide].data.body.options.position === "items-end"
            ? true
            : false
        }
      />

      <BgImage
        propertyPath={`slides[${currentSlide}].data.images.upper`}
        label="Bild oben"
      />

      {!state.slides[currentSlide].data.images.onlyOneImage && (
        <BgImage
          propertyPath={`slides[${currentSlide}].data.images.lower`}
          label="Bild unten"
        />
      )}

      <CustomSelect
        options={state.slides[currentSlide].data.logo.options.positions}
        propertyPath={`slides[${currentSlide}].data.logo.options.position`}
        label="Position Logo"
        disabled={
          state.slides[currentSlide].data.body.options.position ===
            "items-start" ||
          state.slides[currentSlide].data.body.options.position === "items-end"
            ? true
            : false
        }
      />

      <CustomSelect
        options={state.slides[currentSlide].data.body.options.positions}
        propertyPath={`slides[${currentSlide}].data.body.options.position`}
        label="Position Text"
      />

      <InputRepeater
        propertyPath={`slides[${currentSlide}].data.body`}
        label="Text"
      />

      <Input
        propertyPath={`slides[${currentSlide}].data.subline.content`}
        label="Unterzeile"
      />
      <TextScale propertyPath={`slides[${currentSlide}].data.subline.scale`} />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
