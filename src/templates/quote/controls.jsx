import React, { useContext, useEffect } from "react";

import BgImage from "../../components/inputs/bgImage";
import Checkbox from "../../components/inputs/checkbox";
import ColorThemeSelector from "../../components/inputs/colorThemesSelect";
import ControlsWrapper from "../../components/controlsWrapper";
import CustomSelect from "../../components/inputs/customSelect";
import DownloadButton from "../../components/inputs/downloadButton";
import FieldSet from "../../components/inputs/fieldSet";
import InputRepeater from "../../components/inputs/inputRepeater";
import TemplateContext from "../../components/templateContext";
import { updateProperty } from "../../lib/lib";

export default () => {
  const currentSlide = 0;
  const [state, setState] = useContext(TemplateContext);

  useEffect(() => {
    if (
      state.slides[currentSlide].data.body.options.colorTheme === "orange_white"
    ) {
      updateProperty(
        { setState },
        `slides[${currentSlide}].data.body.options.colorTheme`,
        "white_orange"
      );
    }
  }, [state.slides[currentSlide].data.background.isImage]);

  return (
    <ControlsWrapper>
      <FieldSet legend="Format">
        <CustomSelect
          options={[
            { value: { width: 1080, height: 1920 }, label: "Instagram Story" },
            { value: { width: 1080, height: 1080 }, label: "1:1" },
          ]}
          propertyPath={`slides[${currentSlide}].dimensions`}
        />
      </FieldSet>
      <FieldSet legend="Hintergrund">
        <Checkbox
          propertyPath={`slides[${currentSlide}].data.background.isImage`}
          value={state.slides[currentSlide].data.background.isImage}
          label="hat Hintergrundbild"
        />
        {state.slides[currentSlide].data.background.isImage && (
          <BgImage propertyPath={`slides[${currentSlide}].data.image`} />
        )}
      </FieldSet>

      <FieldSet legend="Logo">
        <CustomSelect
          options={state.slides[currentSlide].data.logo.options.positions}
          propertyPath={`slides[${currentSlide}].data.logo.options.position`}
          label="Position Logo"
        />
      </FieldSet>

      <FieldSet legend="Text">
        <ColorThemeSelector
          propertyPath={`slides[${currentSlide}].data.body.options.colorTheme`}
          colorThemeOptions={[
            state.slides[currentSlide].data.background.isImage
              ? "orange_white"
              : "",
            "white_orange",
            "white_black",
          ]}
        />

        <CustomSelect
          options={state.slides[currentSlide].data.body.options.bodyPositions}
          propertyPath={`slides[${currentSlide}].data.body.bodyPosition`}
          label="Position Textblock"
        />

        <InputRepeater
          propertyPath={`slides[${currentSlide}].data.body`}
          selectPosition
          positionOptions={
            state.slides[currentSlide].data.body.options.linePositions
          }
        />
      </FieldSet>

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </ControlsWrapper>
  );
};
