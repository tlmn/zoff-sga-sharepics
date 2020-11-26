import BgImage from "../../../components/inputs/bgImage";
import DownloadButton from "../../../components/inputs/downloadButton";
import React from "react";

export default () => {
  const currentSlide = 1;
  return (
    <>
      <BgImage currentSlide={currentSlide} />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
