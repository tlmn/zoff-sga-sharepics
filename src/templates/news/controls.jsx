import React, { useContext } from "react";

import BgImage from "../../components/inputs/bgImage";
import CheckBox from "../../components/inputs/checkbox";
import DownloadButton from "../../components/inputs/downloadButton";
import InputRepeater from "../../components/inputs/inputRepeater";
import TemplateContext from "../../components/templateContext";

export default () => {
  const currentSlide = 0;
  const [state] = useContext(TemplateContext);
  return (
    <>
      <CheckBox
        propertyPath={`slides[${currentSlide}].data.images.isOnlyOne`}
        label="nur ein Bild"
      />
      <BgImage
        propertyPath={`slides[${currentSlide}].data.images.upper`}
        label="Bild oben"
      />
      {!state.slides[currentSlide].data.images.isOnlyOne && (
        <BgImage
          propertyPath={`slides[${currentSlide}].data.images.lower`}
          label="Bild unten"
        />
      )}

      <InputRepeater propertyPath={`slides[${currentSlide}].data.body`} />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
