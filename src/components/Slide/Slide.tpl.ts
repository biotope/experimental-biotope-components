import { createStylesFrom } from '../../resources/ts/core/createStylesFrom';

interface TemplateData {

}

const styles = createStylesFrom(require('./Slide.styles'));

export default (html: Function, data: TemplateData) => {
    return html`
     ${styles}
    <slot></slot>`;
}
