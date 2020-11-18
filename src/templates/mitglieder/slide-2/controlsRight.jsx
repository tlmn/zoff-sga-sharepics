import DownloadButton from "../../../components/inputs/downloadButton";
import React from "react";
import TextScale from "../../../components/inputs/textScale";
import Textarea from "../../../components/inputs/textarea";

export default ({ state, setState }) => {
  const currentSlide = 2;
  return (
    <>
      <Textarea
        label="Text"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.body.content`}
        rows={5}
        cols={60}
      />

      <TextScale
        state={state}
        setState={setState}
        propertyPath={`slides[[${currentSlide}].data.body.scale`}
      />

      <Textarea
        label="Text"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.localBranch.content`}
        rows={2}
        cols={60}
      />

      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
