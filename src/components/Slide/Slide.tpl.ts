import { createStylesFrom } from '../../resources/ts/core/createStylesFrom';

interface TemplateData {

}

export default (html: Function, data: TemplateData) => {
    const styles = createStylesFrom(require('./Slide.styles'));

    return html`
     ${styles}
    <slot></slot>`;
}