import DownloadButton from "../../components/inputs/downloadButton";
import Input from "../../components/inputs/input";
import React from "react";
import TextScale from "../../components/inputs/textScale";
import Textarea from "../../components/inputs/textarea";

export default ({ state, setState }) => {
  const currentSlide = 0;
  return (
    <>
      <Input
        label="Titel"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.category.content`}
      />

      <Textarea
        label="Text"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.body.content`}
        rows={3}
        cols={30}
      />

      <TextScale
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.body.scale`}
      />

      <Textarea
        label="Text"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.localBranch.content`}
        rows={3}
      />

      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
