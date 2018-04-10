import React, { Component } from 'react';
import { connect } from 'react-redux';

class Operation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            operations: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.operations !== this.state.operations) {
            this.setState({ operations: nextProps.operations });
        }
    }

    render() {
        const { operations } = this.state;
        const opToString = operations.toString();
        let displayOperations = opToString.replace(/,/g, ' ');
        if (operations.length === 0) {
            displayOperations = '0';
        }
        return (
            <div className='display-operations'>
                > { displayOperations }
            </div>
        )}
    }

const mapStateToProps = (state) => {
    return (state.operations);
}

export default connect(mapStateToProps)(Operation);