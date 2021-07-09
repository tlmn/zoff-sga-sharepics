import ColorThemeSelector from '../../components/inputs/colorThemesSelect'
import ControlsWrapper from '../../components/controlsWrapper'
import CustomSelect from '../../components/inputs/customSelect'
import DownloadButton from '../../components/inputs/downloadButton'
import FieldSet from '../../components/inputs/fieldSet'
import Image from '../../components/inputs/image'
import Input from '../../components/inputs/input'
import React from 'react'
import TemplateContext from '../../components/templateContext'
import TextScale from '../../components/inputs/textScale'
import Textarea from '../../components/inputs/textarea'
import { useContext } from 'react'

export default () => {
    const [state] = useContext(TemplateContext)
    const currentSlide = 0

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
                <Textarea
                    propertyPath={`slides[${currentSlide}].data.body.content`}
                    selectScale={false}
                />
                <TextScale
                    propertyPath={`slides[${currentSlide}].data.body.options.scale`}
                />
                <Input
                    propertyPath={`slides[${currentSlide}].data.author.content`}
                    label="Autor:in / Quelle"
                />
                <Input
                    propertyPath={`slides[${currentSlide}].data.position.content`}
                    label="Organisation"
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
                fileName={`quote-${state.slides[
                    state.currentSlide
                ].data.body.content
                    .split(' ')
                    .slice(0, 3)
                    .join('-')}`}
            />
        </ControlsWrapper>
    )
}
