import BgImage from "../../../components/inputs/bgImage";
import DownloadButton from "../../../components/inputs/downloadButton";
import Input from "../../../components/inputs/input";
import React from "react";

export default ({ state, setState }) => {
  const currentSlide = 1;
  return (
    <>
      <BgImage state={state} setState={setState} currentSlide={currentSlide} />

      <Input
        state={state}
        setState={setState}
        label="Unterzeile"
        propertyPath={`slides[${currentSlide}].data.author.content`}
      />
      
      <DownloadButton
        state={state}
        setState={setState}
        fileNamePath={`slides[${currentSlide}].data.author.content`}
      />
    </>
  );
};
