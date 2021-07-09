import modalReducer from './modalReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    modalAction:modalReducer
});

export default rootReducer;