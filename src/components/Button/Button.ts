import template from './Button.tpl';
import Component from '@biotope/element';


export interface ButtonProps {
    title: string;
}

interface ButtonState {

}

export class XButton extends Component<ButtonProps, ButtonState> {
    static componentName = 'x-button';
    static bioAttributes = ['title'];

    created() {
        this.render();
    }
    render() {
        return template(this.html, { title: this.props.title })
    }
}

XButton.register();
