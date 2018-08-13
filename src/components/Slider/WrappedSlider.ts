import { Slider } from './Slider';
import BioComponent from '../../resources/ts/core/BioComponent';

export interface WrappedSliderProps {
    store: string;
}

export interface WrappedSliderState {
    
}

export class WrappedSlider extends BioComponent<WrappedSliderProps, WrappedSliderState> {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    get propsFromAttributes() {
        return {
            store: this.getAttribute('store')
        }
    }

    created() {
        this.render();
    }

    getSlider(): Slider {
        return [...(<any>this.childNodes)].filter((n) => n instanceof Slider)[0];
    }

    render() {
        const slider = this.getSlider();
        slider.props = {
            ...slider.props,
            selected: 0
        };
        return this.html`
            <slot></slot>
        `;
    }
}

WrappedSlider.define('wrapped-slider')