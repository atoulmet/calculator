import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.result !== this.state.result) {
            this.setState({ result: nextProps.result });
        }
    }

    render() {
        const { result } = this.state;

        return (
            <div className='display-result'>
                = { result }
            </div>
        )}
    }

const mapStateToProps = (state) => {
    return (state.operations);
}

export default connect(mapStateToProps)(Result);