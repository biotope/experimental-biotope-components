import { DotData } from './DotData';
import template from './Dots.tpl';
import Component from '@biotope/element';


export interface XDotsProps {
    selected: number;
    count: number
}

interface XDotsState {

}

export class XDots extends Component<XDotsProps, XDotsState> {
    static componentName = 'x-dots';

    static bioAttributes = [{
        name: 'count',
        converter: (input: string) => parseInt(input, 10)
    }, {
        name: 'selected',
        converter: (input: string) => parseInt(input, 10)
    }]

    created() {
        this.render();
    }

    render() {
        const { selected, count } = this.props;
        const dots: DotData[] = new Array(count).fill(1).map((title, idx) => ({
            title,
            selected: idx === selected,
            onClick: this.onSelected.bind(this)
        }));


        return template(this.html, {
            dots
        });
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
