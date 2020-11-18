import BgImage from "../../../components/inputs/bgImage";
import DownloadButton from "../../../components/inputs/downloadButton";
import Input from "../../../components/inputs/input";
import React from "react";

export default ({ state, setState }) => {
  const currentSlide = 0;
  return (
    <>
      <BgImage state={state} setState={setState} currentSlide={currentSlide} />

      <Input
        label="Titel"
        state={state}
        setState={setState}
        propertyPath={`slides[${currentSlide}].data.statement.content`}
      />

      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.statement.content`}
      />
    </>
  );
};
