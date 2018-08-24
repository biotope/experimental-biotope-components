import template from './Button.tpl';
import BioElement from '@biotope/element';


export interface ButtonProps {
    title: string;
}

interface ButtonState {

}

export class XButton extends BioElement<ButtonProps, ButtonState> {
    static elementName = 'x-button';
    static bioAttributes = ['title'];
    created() {
        this.render();
    }
    render() {
        return template(this.html, { title: this.props.title })
    }
}

XButton.register();
