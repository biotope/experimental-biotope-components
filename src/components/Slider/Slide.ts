import BioElement from '@biotope/element';

export interface XSlideProps {
    isSelected: boolean;
}

interface XSlideState {

}

export class XSlide extends BioElement<XSlideProps, XSlideState> {
    static componentName = 'x-slide';

    constructor() {
        super();
    }
    static bioAttributes = ['isSelected']
    created() {
        this.render();
    }

    render() {
        const {isSelected} = this.props;

        return isSelected
            ? this.html`<div class="slide">
    <slot></slot>
</div>`
            : this.html``;
    }
}

XSlide.register();
