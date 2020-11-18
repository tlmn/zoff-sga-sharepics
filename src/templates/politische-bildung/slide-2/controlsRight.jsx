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
        label="Text"
        propertyPath={`slides[${currentSlide}].data.body.content`}
        rows={6}
        cols={30}
      />

      <TextScale
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.body.scale`}
      />

      <Textarea
        state={state}
        setState={setState}
        label="Lokalgruppe (optional)"
        propertyPath={`slides[${currentSlide}].data.localBranch.content`}
        rows={2}
        cols={30}
      />

      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
