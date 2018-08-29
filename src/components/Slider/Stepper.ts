import BioElement from '@biotope/element';


export interface StepperProps {
    direction: string;
}

interface StepperState {

}

export class XStepper extends BioElement<StepperProps, StepperState> {
    static componentName = 'x-stepper';
    static bioAttributes = ['direction'];
    created() {
        this.render();
    }
    render() {
        const { direction } = this.props;
        this.html`
            <button>${direction}</button>
        `;
    }
}

XStepper.register();
