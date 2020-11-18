import DownloadButton from "../../../components/inputs/downloadButton";
import React from "react";
import TextScale from "../../../components/inputs/textScale";
import Textarea from "../../../components/inputs/textarea";

export default ({ state, setState }) => {
  const currentSlide = 2;
  return (
    <>
      <Textarea
        state={state}
        setState={setState}
        rows={6}
        label="text"
        propertyPath={`slides[${currentSlide}].data.body.content`}
      />

      <TextScale
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.body.scale`}
      />

      <Textarea
        state={state}
        setState={setState}
        rows={2}
        label="Lokalgruppe (optional)"
        propertyPath={`slides[${currentSlide}].data.localBranch.content`}
      />

      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
