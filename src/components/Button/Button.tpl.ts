import { createStylesFrom } from '../../resources/ts/core/createStylesFrom';

interface TemplateData {
    title: string;
}

export default (html: Function, data: TemplateData) => {
    const styles = createStylesFrom(require('./Button.styles'));

    return html`
     ${styles} ${data.title}
    `;
}