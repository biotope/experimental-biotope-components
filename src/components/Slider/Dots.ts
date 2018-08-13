import BioComponent from '../../resources/ts/core/BioComponent';


export interface DotsProps {
    selected: number;
    count: number
}

interface DotsState {

}

export class Dots extends BioComponent<DotsProps, DotsState> {

    created() {
        this.render();
    }

    render() {
        const {selected, count} = this.props;
        const dots = new Array(count).fill(1);

        const dotElements = dots.map((_, idx) => selected === idx
            ? BioComponent.wire()`<li onclick=${() => this.onSelected(idx)} style="color: red">+</li>`
            : BioComponent.wire()`<li onclick=${() => this.onSelected(idx)}>+</li>`);
        this.html`
            <ul>${dotElements}</ul>
        `;
    }

    onSelected(index) {
        const selectEvent = new CustomEvent('selectSlide', {
            bubbles: true,
            cancelable: true,
            detail: index
        });

        this.dispatchEvent(selectEvent);
    }
}

Dots.define('x-dots');
