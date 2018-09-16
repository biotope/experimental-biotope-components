import { createStylesCreatorFrom } from '../../resources/ts/core/createStylesCreatorFrom';
import styles from './Slider.styles';

interface TemplateData {
    slidesCount: number;
    selectedSlide: number;
    onSelectSlide: (idx: number) => void;
    onNextSlide: () => void;
    onPrevSlide: () => void;
}
const styleTagCreator = createStylesCreatorFrom(styles);

export default (html: Function, data: TemplateData) => {
    return html`
         ${styleTagCreator()}
        <x-button title="previous" onclick=${data.onPrevSlide}></x-button>
        <div class="slides">
            <slot></slot>
        </div>
        <x-button title="next" onclick=${data.onNextSlide}></x-button>
        <x-dots count=${data.slidesCount} selected=${data.selectedSlide} onselectSlide=${data.onSelectSlide}></x-dots>
     `;
}
