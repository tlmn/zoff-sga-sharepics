import React, { useContext } from "react";

import BgImage from "../../components/inputs/bgImage";
import CheckBox from "../../components/inputs/checkBox";
import CustomSelect from "../../components/inputs/customSelect";
import DownloadButton from "../../components/inputs/downloadButton";
import FieldSet from "../../components/inputs/fieldSet";
import InputRepeater from "../../components/inputs/inputRepeater";
import TemplateContext from "../../components/templateContext";

export default () => {
  const currentSlide = 0;
  const [state] = useContext(TemplateContext);

  return (
    <>
      <FieldSet legend="Hintergrund">
        <CheckBox
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
    </>
  );
};
