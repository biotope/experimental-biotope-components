import BioElement from '@biotope/element';
export const createStylesFrom = (styles) => (BioElement.wire()`<style>${styles.toString()}</style>`).cloneNode(true);
