import React, { useContext, useEffect } from "react";

import BgImage from "../../components/inputs/bgImage";
import Checkbox from "../../components/inputs/checkbox";
import ColorThemeSelector from "../../components/inputs/colorThemesSelect";
import CustomSelect from "../../components/inputs/customSelect";
import DownloadButton from "../../components/inputs/downloadButton";
import FieldSet from "../../components/inputs/fieldSet";
import Input from "../../components/inputs/input";
import InputRepeater from "../../components/inputs/inputRepeater";
import TemplateContext from "../../components/templateContext";
import TextScale from "../../components/inputs/textScale";
import { updateProperty } from "../../lib/lib";

export default () => {
  const currentSlide = 0;
  const [state, setState] = useContext(TemplateContext);

  useEffect(() => {
    if (
      state.slides[currentSlide].data.body.options.position === "items-start"
    ) {
      updateProperty(
        { setState },
        `slides[${currentSlide}].data.images.onlyOneImage`,
        true
      );

      updateProperty(
        { setState },
        `slides[${currentSlide}].data.logo.options.position`,
        "bottom-center"
      );
    }

    if (state.slides[currentSlide].data.body.options.position === "items-end") {
      updateProperty(
        { setState },
        `slides[${currentSlide}].data.images.onlyOneImage`,
        true
      );

      updateProperty(
        { setState },
        `slides[${currentSlide}].data.logo.options.position`,
        "top-right"
      );
    }
  }, [state.slides[currentSlide].data.body.options.position]);

  return (
    <>
      <FieldSet legend="Bilder">
        <Checkbox
          propertyPath={`slides[${currentSlide}].data.images.onlyOneImage`}
          value={state.slides[currentSlide].data.images.onlyOneImage}
          label="nur ein Bild"
          disabled={
            state.slides[currentSlide].data.body.options.position ===
              "items-start" ||
            state.slides[currentSlide].data.body.options.position ===
              "items-end"
              ? true
              : false
          }
        />

        <BgImage
          propertyPath={`slides[${currentSlide}].data.images.upper`}
          label="Bild oben"
        />

        {!state.slides[currentSlide].data.images.onlyOneImage && (
          <BgImage
            propertyPath={`slides[${currentSlide}].data.images.lower`}
            label="Bild unten"
          />
        )}
      </FieldSet>

      <FieldSet legend="Logo">
        <CustomSelect
          options={state.slides[currentSlide].data.logo.options.positions}
          propertyPath={`slides[${currentSlide}].data.logo.options.position`}
          label="Position Logo"
          disabled={
            state.slides[currentSlide].data.body.options.position ===
              "items-start" ||
            state.slides[currentSlide].data.body.options.position ===
              "items-end"
              ? true
              : false
          }
        />
      </FieldSet>

      <FieldSet legend="Text">
        <ColorThemeSelector
          colorThemeOptions={["black_white", "orange_white"]}
          propertyPath={`slides[${currentSlide}].data.body.options.colorTheme`}
        />

        <CustomSelect
          options={state.slides[currentSlide].data.body.options.positions}
          propertyPath={`slides[${currentSlide}].data.body.options.position`}
          label="Position Text"
        />

        <InputRepeater propertyPath={`slides[${currentSlide}].data.body`} />
      </FieldSet>

      <FieldSet legend="Unterzeile">
        <ColorThemeSelector
          colorThemeOptions={[ "white_black", "black_white"]}
          propertyPath={`slides[${currentSlide}].data.subline.colorTheme`}
        />

        <Input propertyPath={`slides[${currentSlide}].data.subline.content`} />
        
        <TextScale
          propertyPath={`slides[${currentSlide}].data.subline.scale`}
        />
      </FieldSet>

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
