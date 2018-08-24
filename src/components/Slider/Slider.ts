import template from './Slider.tpl';

import BioElement from '@biotope/element';

import { XSlide } from '../Slide/Slide';
import { XButton } from '../Button/Button';
import { XDots } from '../Dots/Dots';


export interface XSliderProps {
    selected: number;
}

interface XSliderState {
    lastSelected: number;
    selected: number;
}

export class XSlider extends BioElement<XSliderProps, XSliderState> {
    static elementName = 'x-slider';

    get dependencies() {
        return [
            XButton,
            XSlide,
            XDots
        ]
    };

    constructor() {
        super();

        // re-render when children have changed. Note that childNodes is empty when connectedCallback is called
        // note also, that created() is called when initial childNodes are available. so maybe only re-render
        // on child note changes after created has been called
        const observer = new MutationObserver(changes => !(this as any)._init$ && this.render());
        observer.observe(this, { childList: true });

        this.onNextSlide = this.onNextSlide.bind(this);
        this.onPrevSlide = this.onPrevSlide.bind(this);
        this.onSelectSlide = this.onSelectSlide.bind(this);
    }

    static bioAttributes = [{
        name: 'selected',
        converter: (a) => parseInt(a, 10),
    }];

    get defaultState() {
        return { lastSelected: 0, selected: 0 };
    }

    onPropsChanged() {
        this.setState({ selected: this.props.selected });
    }

    created() {
        this.onPropsChanged();
        this.render();
    }

    render() {
        const { selected } = this.state;
        const slidesCount = this.slides.length;

        this.slides.forEach((slide: Element, idx) => { idx === selected ? slide.classList.add('active') : slide.classList.remove('active'); });

        return template(this.html, {
            slidesCount,
            selectedSlide: selected,
            onSelectSlide: this.onSelectSlide,
            onNextSlide: this.onNextSlide,
            onPrevSlide: this.onPrevSlide
        });
    }

    onSelectSlide(e: any) {
        this.setSelectedSlide(e.detail);
    }

    setSelectedSlide(selected: number) {
        this.setState({ lastSelected: this.state.selected, selected });
        this.raiseSlideChange();
    }

    onPrevSlide() {
        const { selected } = this.state;
        const slidesCount = this.slidesCount;

        this.setSelectedSlide((selected - 1 + slidesCount) % slidesCount);
    }

    onNextSlide() {
        const { selected } = this.state;
        const slidesCount = this.slidesCount;

        this.setSelectedSlide((selected + 1) % slidesCount);
    }

    raiseSlideChange() {
        const changeEvent = new CustomEvent('slideChange', {
            bubbles: true,
            cancelable: true,
            detail: this.state.selected
        });

        this.dispatchEvent(changeEvent);
    }

    get slides(): Element[] {
        return [...(<any>this.childNodes)].filter((n) => n instanceof XSlide);
    }

    get slidesCount() {
        return this.slides.length;
    }
}
