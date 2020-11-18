import BgImage from "../../components/inputs/bgImage";
import CustomSelect from "../../components/inputs/customSelect";
import DownloadButton from "../../components/inputs/downloadButton";
import React from "react";
import TextScale from "../../components/inputs/textScale";
import Textarea from "../../components/inputs/textarea";
import { textPositions } from "../../config/vars";

export default ({ state, setState }) => {
  const currentSlide = 0;
  return (
    <>
      <BgImage state={state} setState={setState} currentSlide={currentSlide} />

      <Textarea
        label="Text"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.body.content`}
        rows={3}
      />

      <CustomSelect
        label="Textposition"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.body.textPosition`}
        availableValues={textPositions}
      />

      <TextScale
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.body.scale`}
      />

      <Textarea
        label="Lokalgruppe (optional)"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.localBranch.content`}
        rows={2}
      />

      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
