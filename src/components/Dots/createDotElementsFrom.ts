import { DotData } from './DotData';
import BioElement from '@biotope/element';

export const createDotElementsFrom = (dots: DotData[]) =>
    dots.map((dot, idx) => {
        const className: string = dot.selected ? 'active' : '';
        return BioElement.wire()`<li onclick="${() => dot.onClick(idx)}" class="${className}">+</li>`
    });