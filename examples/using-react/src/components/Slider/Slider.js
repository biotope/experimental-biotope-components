import React, { forwardRef } from 'react';
import withDataTap from '../../hoc/withDataTap';

const Slider = forwardRef((props, ref) => (
    <x-slider {...props} ref={ref}>
        {props.children}
    </x-slider>
));

export default withDataTap(Slider);
