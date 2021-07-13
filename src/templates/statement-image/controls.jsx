import ColorThemeSelector from '../../components/inputs/colorThemesSelect'
import ControlsWrapper from '../../components/controlsWrapper'
import CustomSelect from '../../components/inputs/customSelect'
import DownloadButton from '../../components/inputs/downloadButton'
import FieldSet from '../../components/inputs/fieldSet'
import Image from '../../components/inputs/image'
import InputRepeater from '../../components/inputs/inputRepeater'
import React from 'react'
import TemplateContext from '../../components/templateContext'
import TextScale from '../../components/inputs/textScale'
import { useContext } from 'react'

export default () => {
  const currentSlide = 0
  const [state] = useContext(TemplateContext)
  return (
    <ControlsWrapper>
      <FieldSet legend="Format">
        <CustomSelect
          propertyPath={`slides[${currentSlide}].options.dimensions`}
          options={[
            {
              value: { width: 1080, height: 1080 },
              label: 'Instagram / Facebook (1:1)',
            },
            {
              value: { width: 1012, height: 506 },
              label: 'Twitter (2:1)',
            },
          ]}
        />
      </FieldSet>

      <FieldSet>
        <Image propertyPath={`slides[${currentSlide}].data.image`} />
      </FieldSet>

      <FieldSet legend="Text">
        <InputRepeater
          propertyPath={`slides[${currentSlide}].data.body`}
          selectScale={false}
        />
        <TextScale
          propertyPath={`slides[${currentSlide}].data.body.options.scale`}
        />
      </FieldSet>

      <FieldSet legend="Farbe">
        <ColorThemeSelector
          colorThemeOptions={['green', 'blue', 'purple', 'yellow']}
          propertyPath={`slides[${currentSlide}].options.colorTheme`}
        />
      </FieldSet>

      <FieldSet legend="Partnerlogo">
        <Image
          propertyPath={`slides[${currentSlide}].data.partnerLogo`}
          scale={false}
          remove={true}
          reset={false}
        />
      </FieldSet>

      <DownloadButton
        fileName={`statementImage-${state.slides[
          state.currentSlide
        ].data.body.lines
          .map((line) => line.content)
          .join('-')}`}
      />
    </ControlsWrapper>
  )
}
