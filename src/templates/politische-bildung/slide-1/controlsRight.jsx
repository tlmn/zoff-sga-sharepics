import DownloadButton from "../../../components/inputs/downloadButton";
import React from "react";
import TextScale from "../../../components/inputs/textScale";
import Textarea from "../../../components/inputs/textarea";

export default () => {
  const currentSlide = 1;
  return (
    <>
      <Textarea
        label="Text"
        propertyPath={`slides[${currentSlide}].data.body.content`}
        rows={6}
        cols={30}
      />

      <TextScale propertyPath={`slides[${currentSlide}].data.body.scale`} />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
