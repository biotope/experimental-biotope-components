import { DotData } from './DotData';
import template from './Dots.tpl';
import BioElement from '@biotope/element';


export interface XDotsProps {
    selected: number;
    count: number
}

interface XDotsState {

}

export class XDots extends BioElement<XDotsProps, XDotsState> {
    static componentName = 'x-dots';

    static elementName = 'x-dots';

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
