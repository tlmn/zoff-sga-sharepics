import DownloadButton from "../../../components/inputs/downloadButton";
import React from "react";
import TextScale from "../../../components/inputs/textScale";
import Textarea from "../../../components/inputs/textarea";

export default ({ state, setState }) => {
  const currentSlide = 1;
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

      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
