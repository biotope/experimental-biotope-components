import React, { Component, createRef } from 'react';

/* 
    DEV NOTES
    These lifecycle methods serve as a POC of
    how you to wire into a web-component's logic
    from within your react app.
*/

class Slider extends Component {
    constructor(props) {
        super(props);
        this.node = createRef();
    }

    componentDidMount(){
        const { data } = this.props;
        this.node.current.props = data;
    }

    componentDidUpdate() {
        const { data } = this.props;
        this.node.current.props = data;
    }

    render() {
        return (
            <x-slider 
            ref={this.node}
            {...this.props}
            >
                {this.props.children}
            </x-slider>
        );
    }
}

export default Slider;
