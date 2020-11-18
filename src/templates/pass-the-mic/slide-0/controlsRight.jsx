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
        propertyPath="slides[0].data.category.content"
        state={state}
        setState={setState}
        label="Headline"
      />

      <Textarea
        propertyPath="slides[0].data.body.content"
        state={state}
        setState={setState}
        label="Text"
        rows={6}
        cols={30}
      />

      <TextScale
        propertyPath="slides[0].data.body.scale"
        state={state}
        setState={setState}
      />

      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.statement.content`}
      />
    </>
  );
};
