import { createStylesCreatorFrom } from '../../resources/ts/core/createStylesCreatorFrom';
import styles from './Slide.styles';

interface TemplateData {

}

const styleTagCreator = createStylesCreatorFrom(styles);

export default (html: Function, data: TemplateData) => {
    return html`
         ${styleTagCreator()}
        <slot />
    `;
}
