import { combineReducers } from 'redux';

import operations from './operations';
import userType from './userType';

export default combineReducers({
    operations,
    userType
});