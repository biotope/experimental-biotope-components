import BioComponent from '../../resources/ts/core/BioComponent';


export interface StepperProps {
    direction: string;
}

interface StepperState {

}

export class Stepper extends BioComponent<StepperProps, StepperState> {

    static get observedAttributes() {
        return [
            ...BioComponent.observedAttributes,
            'direction'
        ]
    }

    created() {
        this.render();
    }

    get propsFromAttributes() {
        return {direction: this.getAttribute('direction')};
    }

    render() {
        
        const {direction} = this.props;
        
        this.html`
            <button>${direction}</button>
        `;
    }
}

Stepper.define('x-stepper');
