import BioComponent from '../../resources/ts/core/BioComponent';

export interface SlideProps {
    isSelected: boolean;
}

interface SlideState {

}

export class Slide extends BioComponent<SlideProps, SlideState> {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    get defaultProps() {
        return {isSelected: this.hasAttribute('selected')};
    }

    created() {
        this.render();
    }

    render() {
        const isSelected = this.props.isSelected;

        return isSelected
            ? this.html`<div class="slide"><slot></slot></div>`
            : this.html``;
    }
}

Slide.define('x-slide');
