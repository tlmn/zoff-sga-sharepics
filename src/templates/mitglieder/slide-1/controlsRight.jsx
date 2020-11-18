import DownloadButton from "../../../components/inputs/downloadButton";
import Input from "../../../components/inputs/input";
import React from "react";
import TextScale from "../../../components/inputs/textScale";
import Textarea from "../../../components/inputs/textarea";

export default ({ state, setState }) => {
  const currentSlide = 1;
  return (
    <>
      <Textarea
        label="Text"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.body.content`}
        rows={10}
        cols={60}
      />

      <TextScale
        state={state}
        setState={setState}
        propertyPath={`slides[[${currentSlide}].data.body.scale`}
      />

      <Input
        label="Autor:in"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.author.content`}
      />

      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
