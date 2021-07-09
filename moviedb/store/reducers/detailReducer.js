import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState = {
    result: null
};

const detailMovie = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DETAILMOVIE:
            return updateObject(state,{result:action.result})
        default:
            return state
    }
};

export default detailMovie;