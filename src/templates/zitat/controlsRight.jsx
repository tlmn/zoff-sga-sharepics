import DownloadButton from "../../components/inputs/downloadButton";
import Input from "../../components/inputs/input";
import React from "react";
import TextScale from "../../components/inputs/textScale";
import Textarea from "../../components/inputs/textarea";

export default ({ state, setState }) => {
  const currentSlide = 0;
  return (
    <>
      <Textarea
        label="Zitattext"
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
