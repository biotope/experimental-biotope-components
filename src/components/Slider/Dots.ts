import BioElement from '@biotope/element';


export interface DotsProps {
    selected: number;
    count: number
}

interface DotsState {

}

export class Dots extends BioElement<DotsProps, DotsState> {

    created() {
        this.render();
    }

    render() {
        const { selected, count } = this.props;
        const dots = new Array(count).fill(1);

        const dotElements = dots.map((_, idx) => selected === idx
            ? BioElement.wire()`<li onclick=${() => this.onSelected(idx)} style="color: red">+</li>`
            : BioElement.wire()`<li onclick=${() => this.onSelected(idx)}>+</li>`);
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
