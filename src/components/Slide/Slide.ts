import template from './Slide.tpl';
import Component from '@biotope/element';

export interface XSlideProps {
    isSelected: boolean;
}

interface XSlideState {

}

export class XSlide extends Component<XSlideProps, XSlideState> {
    static componentName = 'x-slide';

    static bioAttributes = ['isSelected']
    created() {
        this.render();
    }

    render() {
        return template(this.html, {})
    }
}
