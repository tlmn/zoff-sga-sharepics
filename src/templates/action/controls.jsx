import React, { useContext } from "react";

import ControlsWrapper from "../../components/controlsWrapper";
import DownloadButton from "../../components/inputs/downloadButton";
import FieldSet from "../../components/inputs/fieldSet";
import InputRepeater from "../../components/inputs/inputRepeater";
import TemplateContext from "../../components/templateContext";

export default () => {
  const currentSlide = 0;
  const [state] = useContext(TemplateContext);

  return (
    <ControlsWrapper>
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
