import template from './Slide.tpl';
import BioElement from '@biotope/element';

export interface XSlideProps {
    isSelected: boolean;
}

interface XSlideState {

}

export class XSlide extends BioElement<XSlideProps, XSlideState> {
    static elementName = 'x-slide';
    static bioAttributes = ['isSelected']
    created() {
        this.render();
    }

    render() {
        return template(this.html, {})
    }
}
