import BioElement from '@biotope/element';


export interface StepperProps {
    direction: string;
}

interface StepperState {

}

export class Stepper extends BioElement<StepperProps, StepperState> {

    static get observedAttributes() {
        return [
            ...BioElement.observedAttributes,
            'direction'
        ]
    }

    created() {
        this.render();
    }

    get propsFromAttributes() {
        return { direction: this.getAttribute('direction') };
    }

    render() {

        const { direction } = this.props;

        this.html`
            <button>${direction}</button>
        `;
    }
}

Stepper.define('x-stepper');
