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
        state={state}
        setState={setState}
        label="Kategorie"
        propertyPath={`slides[${currentSlide}].data.type.content`}
      />

      <Textarea
        state={state}
        setState={setState}
        label="Titel"
        propertyPath={`slides[${currentSlide}].data.event.content`}
        rows={6}
        cols={30}
      />

      <TextScale
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.event.scale`}
      />

      <Input
        state={state}
        setState={setState}
        label="Referent:in"
        propertyPath={`slides[${currentSlide}].data.speaker.content`}
      />

      <Input
        state={state}
        setState={setState}
        label="Ort"
        propertyPath={`slides[${currentSlide}].data.location.content`}
      />

      <Input
        state={state}
        setState={setState}
        label="Datum / Zeit"
        propertyPath={`slides[${currentSlide}].data.date.content`}
      />

      <Textarea
        state={state}
        setState={setState}
        label="Lokalgruppe (optional)"
        propertyPath={`slides[${currentSlide}].data.localBranch.content`}
        rows={2}
      />

      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.event.content`}
      />
    </>
  );
};
