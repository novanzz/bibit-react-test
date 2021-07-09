import * as actionTypes from './actionTypes';

export const detailMovie = ( res ) => {
    return {
        type: actionTypes.DETAILMOVIE,
        result: res
    };
}

export const modalAction = (res) => {
    return{
        type : actionTypes.MODALACTION,
        result: res
    }
}