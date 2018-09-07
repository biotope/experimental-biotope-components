import { DotData } from './DotData';
import { createDotElementsFrom } from './createDotElementsFrom';
import { createStylesFrom } from '../../resources/ts/core/createStylesFrom';

interface TemplateData {
    dots: DotData[];
}

const styles = createStylesFrom(require('./Dots.styles'));

export default (html: Function, data: TemplateData) => {
    const dotElements: string[] = createDotElementsFrom(data.dots);

    return html`
         ${styles}
        <ul>${dotElements}</ul>
    `;
}
