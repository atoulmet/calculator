import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNumberAction, addOperatorAction, clearStoreAction, getResultAction } from '../actions/index';


class Button extends Component {

    _handleKeyboardEvent = (e) => {
        if (e.code === 'Space' && this.props.value === 'C' && this.props.userType.value === 'Developer') {
            const action = Math.floor(Math.random() * 6);
            if (action === 0) {
                this.props.clearStore();
            }
            else if (action === 1 || action === 4) {
                const random = Math.floor(Math.random() * 10);
                this.props.addNumber(random.toString());
            }
            else if (action === 2 || action === 5) {
                let value = Math.floor(Math.random() * 4);
                let choices = ['+', '-', '/', '*'];
                this.props.addOperator(choices[value]);
            }
            else if (action === 3 && this.props.operations.operations.length !== 0) {
                this.props.getResult();
            }
        }
    }

    componentWillMount() {
        document.addEventListener('keydown', this._handleKeyboardEvent, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this._handleKeyboardEvent, false);
    }

    _triggerAction = (e) => {
        e.preventDefault();
        const value = this.props.value;
        if (isNaN(value) === false || value === '.' ) {
            this.props.addNumber(value);
        }
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            this.props.addOperator(value);
        }
        else if (value === '=' && this.props.operations.operations.length !== 0) {
            this.props.getResult();
        }
        else if (value === 'C') {
            this.props.clearStore();
        }
    }

    render() {
        const value = this.props.value;
        let display = value;
        if (value === '*') {
            display = 'x';
        }
        return (
            <button className={this.props.class} onClick={ this._triggerAction }>
                { display }
            </button>
        )}
    }

const mapStateToProps = (state) => {
    return (state);
}

const mapDispatchToProps = dispatch => {
    return {
        addNumber: (input) => { dispatch(addNumberAction(input)) },
        addOperator: (input) => { dispatch(addOperatorAction(input)) },
        clearStore: () => { dispatch(clearStoreAction()) },
        getResult: () => { dispatch(getResultAction()) }        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);