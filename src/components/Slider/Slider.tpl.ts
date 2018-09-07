import { createStylesFrom } from '../../resources/ts/core/createStylesFrom';

interface TemplateData {
    slidesCount: number;
    selectedSlide: number;
    onSelectSlide: (idx: number) => void;
    onNextSlide: () => void;
    onPrevSlide: () => void;
}
const styles = createStylesFrom(require('./Slider.styles'));

export default (html: Function, data: TemplateData) => {
    return html`
     ${styles}
    <x-button title="previous" onclick=${data.onPrevSlide}></x-button>
    <div class="slides">
        <slot></slot>
    </div>
    <x-button title="next" onclick=${data.onNextSlide}></x-button>
    <x-dots count=${data.slidesCount} selected=${data.selectedSlide} onselectSlide=${data.onSelectSlide}></x-dots>
     `;
}
