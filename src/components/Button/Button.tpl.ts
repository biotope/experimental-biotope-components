import { createStylesFrom } from '../../resources/ts/core/createStylesFrom';

interface TemplateData {
    title: string;
}

const styles = createStylesFrom(require('./Button.styles'));

export default (html: Function, data: TemplateData) => {
    return html`
     ${styles} ${data.title}
    `;
}
