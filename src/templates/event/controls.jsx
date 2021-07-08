import React, { useContext, useEffect } from "react";

import Checkbox from "../../components/inputs/checkbox";
import ColorThemeSelector from "../../components/inputs/colorThemesSelect";
import ControlsWrapper from "../../components/controlsWrapper";
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

  const {
    slides: {
      0: {
        data: {
          body: {
            options: { position },
          },
        },
      },
    },
  } = state;

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
  }, [position]);

  return (
    <ControlsWrapper>
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

      <FieldSet legend="Text 1. Farbe">
        <ColorThemeSelector
          colorThemeOptions={["orange_white", "black_white"]}
          propertyPath={`slides[${currentSlide}].data.body.options.colorTheme`}
        />

        <CustomSelect
          options={state.slides[currentSlide].data.body.options.positions}
          propertyPath={`slides[${currentSlide}].data.body.options.position`}
          label="Position Text"
        />

        <InputRepeater propertyPath={`slides[${currentSlide}].data.body`} />
      </FieldSet>
      {state.slides[currentSlide].data.body.options.position !==
        "items-start" &&
        state.slides[currentSlide].data.body.options.position !==
          "items-end" && (
          <FieldSet legend="Text 2. Farbe">
            <ColorThemeSelector
              colorThemeOptions={["white_black", "black_white"]}
              propertyPath={`slides[${currentSlide}].data.subline.colorTheme`}
            />
            <div className="flex">
              <Input
                propertyPath={`slides[${currentSlide}].data.subline.content`}
                className="mr-2"
              />

              <TextScale
                propertyPath={`slides[${currentSlide}].data.subline.scale`}
                label=""
              />
            </div>
          </FieldSet>
        )}
      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </ControlsWrapper>
  );
};
