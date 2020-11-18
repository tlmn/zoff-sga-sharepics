import DownloadButton from "../../../components/inputs/downloadButton";
import Input from "../../../components/inputs/input";
import React from "react";
import TextScale from "../../../components/inputs/textScale";
import Textarea from "../../../components/inputs/textarea";

export default ({ state, setState }) => {
  const currentSlide = 0;
  return (
    <>
      <Input
        state={state}
        setState={setState}
        label="Titel"
        propertyPath={`slides[${currentSlide}].data.category.content`}
      />

      <Textarea
        state={state}
        setState={setState}
        label="Text"
        propertyPath={`slides[${currentSlide}].data.body.content`}
        rows={5}
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
