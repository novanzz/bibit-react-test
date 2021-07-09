import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState = {
    result: { isOpen: "None",value:null }
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MODALACTION:
            return updateObject(state, { result: action.result })
        default:
            return state
    }
};

export default modalReducer;