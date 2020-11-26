import BgImage from "../../../components/inputs/bgImage";
import DownloadButton from "../../../components/inputs/downloadButton";
import Input from "../../../components/inputs/input";
import React from "react";

export default () => {
  const currentSlide = 0;
  return (
    <>
      <BgImage currentSlide={currentSlide} />

      <Input
        label="Titel"
        propertyPath={`slides[${currentSlide}].data.statement.content`}
      />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.statement.content`}
      />
    </>
  );
};
