import { createStylesCreatorFrom } from '../../resources/ts/core/createStylesCreatorFrom';
import styles from './Button.styles';

interface TemplateData {
    title: string;
}

const styleTagCreator = createStylesCreatorFrom(styles);

export default (html: Function, data: TemplateData) => {
    return html`
         ${styleTagCreator()} ${data.title}
    `;
}
