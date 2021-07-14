import ColorThemeSelector from '../../components/inputs/colorThemesSelect'
import ControlsWrapper from '../../components/controlsWrapper'
import CustomSelect from '../../components/inputs/customSelect'
import DownloadButton from '../../components/inputs/downloadButton'
import FieldSet from '../../components/inputs/fieldSet'
import Image from '../../components/inputs/image'
import Input from '../../components/inputs/input'
import InputRepeater from '../../components/inputs/inputRepeater'
import React from 'react'
import TextScale from '../../components/inputs/textScale'
import useDataContext from '../../lib/useDataContext'

export default () => {
  const currentSlide = 0
  const { state } = useDataContext()
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
      <FieldSet legend="Text">
        <InputRepeater
          propertyPath={`slides[${currentSlide}].data.body`}
          selectScale={false}
        />
        <TextScale
          propertyPath={`slides[${currentSlide}].data.body.options.scale`}
        />
        <Input
          propertyPath={`slides[${currentSlide}].data.description.content`}
          label="Autor:in / Quelle"
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
          remove={true}
        />
      </FieldSet>

      <DownloadButton
        fileName={`statement-${state.slides[state.currentSlide].data.body.lines
          .map((line) => line.content)
          .join('-')}`}
      />
    </ControlsWrapper>
  )
}
