import Element from '@biotope/element';
export const createStylesCreatorFrom = (styles) => {
    const styleTag = (Element.wire()`<style>${styles.toString()}</style>`);
    return () => styleTag.cloneNode(true);
}
