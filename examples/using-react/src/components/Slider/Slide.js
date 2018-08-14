import React from 'react'

const Slide = ({ children, ...props }) => (
    <x-slide {...props}>
        {children}
    </x-slide>
);

export default Slide;
