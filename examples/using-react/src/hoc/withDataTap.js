import React, { Component, createRef } from 'react';

const withDataTap = WrappedComponent => {
    class DataInProps extends Component {
        constructor(props) {
            super(props);
            this.node = createRef();
        }

        componentDidMount() {
            this.useDataAsTap();
        }

        componentDidUpdate() {
            this.useDataAsTap();
        }

        useDataAsTap = () => {
            const { data } = this.props;
            const { forwardedRef } = this.node.current;

            return forwardedRef ?
                forwardedRef.current.props = data :
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
