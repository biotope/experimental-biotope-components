import './Dots';
import './Slide';
import './Stepper';

import BioComponent from '../../resources/ts/core/BioComponent';
import {Slide} from './Slide';


export interface SliderProps {
    selected: number;
}

interface SliderState {
    lastSelected: number;
    selected: number;
}

export class Slider extends BioComponent<SliderProps, SliderState> {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // re-render when children have changed. Note that childNodes is empty when connectedCallback is called
        // note also, that created() is called when initial childNodes are available. so maybe only re-render
        // on child note changes after created has been called
        const observer = new MutationObserver(changes => !(<any>this)._init$ && this.render());
        observer.observe(this, {childList: true});

        this.onNextSlide = this.onNextSlide.bind(this);
        this.onPrevSlide = this.onPrevSlide.bind(this);
        this.onSelectSlide = this.onSelectSlide.bind(this);
    }

    get defaultState() {
        return {lastSelected: 0, selected: 0};
    }

    onPropsChanged() {
        this.setState({selected: this.props.selected});
    }

    created() {
        this.onPropsChanged();
        this.render();
    }

    get defaultProps() {
        var initiallySelectedSlide = this.hasAttribute('selected')
            ? parseInt(this.getAttribute('selected'), 10)
            : 0;

        return {selected: initiallySelectedSlide};
    }

    render() {
        const {selected} = this.state;
        const slidesCount = this.slides.length;

        this.slides.forEach((slide, idx) => slide.props = {isSelected: idx === selected});

        return this.html`
            <x-stepper direction="previous" onclick=${this.onPrevSlide}></x-stepper>
            <div class="slides">
                <slot></slot>
            </div>
            <x-stepper direction="next" onclick=${this.onNextSlide}></x-stepper>
            <x-dots 
                props=${ {count: slidesCount, selected} }
                onselectSlide=${this.onSelectSlide}></x-dots>
        `;
    }

    onSelectSlide(e: any) {
        this.setSelectedSlide(e.detail);
    }

    setSelectedSlide(selected: number) {
        this.setState({lastSelected: this.state.selected, selected});
        this.raiseSlideChange();
    }

    onPrevSlide() {
        const {selected} = this.state;
        const slidesCount = this.slidesCount;

        this.setSelectedSlide((selected - 1 + slidesCount) % slidesCount);
    }

    onNextSlide() {
        const {selected} = this.state;
        const slidesCount = this.slidesCount;

        this.setSelectedSlide((selected + 1) % slidesCount);
    }

    raiseSlideChange() {
        const changeEvent = new CustomEvent('slideChange', {
            bubbles: true,
            cancelable: true,
            detail: this.props.selected
        });

        this.dispatchEvent(changeEvent);
    }

    get slides() {
        return [...(<any>this.childNodes)].filter((n) => n instanceof Slide);
    }

    get slidesCount() {
        return this.slides.length;
    }
}

Slider.define('x-slider');