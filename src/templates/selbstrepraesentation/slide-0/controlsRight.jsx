import DownloadButton from "../../../components/inputs/downloadButton";
import Input from "../../../components/inputs/input";
import React from "react";
import TextScale from "../../../components/inputs/textScale";

export default ({ state, setState }) => {
  const currentSlide = 0;
  return (
    <>
      <Input
        label="Text"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.body.content`}
      />

      <TextScale
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.body.scale`}
      />

      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
