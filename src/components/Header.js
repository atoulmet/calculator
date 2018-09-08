import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { changeUserAction } from '../actions/index';

class Header extends Component {

    _onSelect = (option) => {
        const value = option.value;
        this.props.changeUser(value);
    }

    render() {
        const options = [
            'User', 'Developer',
        ];
        const userType = this.props.userType.value;

        return (
            <div className='header'>
                <Dropdown options={ options } onChange={ this._onSelect } value={ userType } />
            </div>
        )};
    }

const mapStateToProps = (state) => {
    return (state);
}

const mapDispatchToProps = dispatch => {
    return {
        changeUser: (type) => { dispatch(changeUserAction(type)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);