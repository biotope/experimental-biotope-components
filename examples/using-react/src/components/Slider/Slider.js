import React, { forwardRef } from 'react';
import withDataTap from '../../hoc/withDataTap';

const Slider = forwardRef((props, ref) => (
    <x-slider {...props} ref={ref}>
        {props.children}
    </x-slider>
));

// stateful component example
/* class Slider extends React.Component {
    constructor(props) {
        super(props)
        // forwardedRef as the ref name is a requirement.
        this.forwardedRef = React.createRef();
    }
    
    render() {
        return (
            <x-slider {...this.props} ref={this.forwardedRef}>
                {this.props.children}
            </x-slider>
        );
    }
} */

export default withDataTap(Slider);
