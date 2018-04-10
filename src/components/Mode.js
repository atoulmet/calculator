import React, { Component } from 'react';
import { connect } from 'react-redux';

class Operation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'User'
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userType.value  !== this.state.mode) {
            this.setState({ mode : nextProps.userType.value })
        }
    }

    render() {
        const { mode } = this.state;
        let display = mode;
        if (mode === 'Developer') {
            display = 'dev';
        }

        return (
            <div className='mode-container'>            
                <div className='mode'>
                    { display } mode 
                </div>
            </div>
            
        )}
    }

const mapStateToProps = (state) => {
    return (state);
}

export default connect(mapStateToProps)(Operation);