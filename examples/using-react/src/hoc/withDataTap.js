import React, { Component, createRef } from 'react';

const withDataTap = WrappedComponent => {
    class DataInProps extends Component {
        constructor(props) {
            super(props);
            this.node = createRef();
        }

        componentDidMount() {
            const { data } = this.props;
            this.node.current.props = data;
        }

        componentDidUpdate() {
            const { data } = this.props;
            this.node.current.props = data;
        }

        render() {
            return (
                <WrappedComponent {...this.props} ref={this.node} />
            );
        }
    }

    return DataInProps;
}

export default withDataTap;
