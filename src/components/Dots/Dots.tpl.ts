import { DotData } from './DotData';
import { createDotElementsFrom } from './createDotElementsFrom';
import { createStylesCreatorFrom } from '../../resources/ts/core/createStylesCreatorFrom';
import styles from './Dots.styles';

interface TemplateData {
    dots: DotData[];
}

const styleTagCreator = createStylesCreatorFrom(styles);

export default (html: Function, data: TemplateData) => {
    const dotElements: string[] = createDotElementsFrom(data.dots);

    return html`
         ${styleTagCreator()}
        <ul>${dotElements}</ul>
    `;
}
