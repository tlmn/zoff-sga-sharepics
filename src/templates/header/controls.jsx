import Checkbox from "../../components/inputs/checkbox";
import ControlsWrapper from "../../components/controlsWrapper";
import DownloadButton from "../../components/inputs/downloadButton";
import FieldSet from "../../components/inputs/fieldSet";
import Input from "../../components/inputs/input";
import InputRepeater from "../../components/inputs/inputRepeater";
import React from "react";
import TemplateContext from "../../components/templateContext";
import { useContext } from "react";

export default () => {
  const currentSlide = 0;
  const [state] = useContext(TemplateContext);

  return (
    <ControlsWrapper>
      <FieldSet legend="Logo">
        <Checkbox
          propertyPath={`slides[${currentSlide}].data.logo.show`}
          label="Logo anzeigen"
        />
        {state.slides[0].data.logo.show && (
          <Input
            propertyPath={`slides[${currentSlide}].data.logo.branch`}
            label="Ortsgruppe"
          />
        )}
      </FieldSet>

      <FieldSet legend="Text">
        <InputRepeater
          propertyPath={`slides[${currentSlide}].data.body`}
          selectBold
        />
      </FieldSet>

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </ControlsWrapper>
  );
};
