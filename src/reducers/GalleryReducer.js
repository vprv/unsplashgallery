import {IMAGES_FETCHED, IMAGES_FAILED} from '../actionTypes';

const INITIAL_STATE = {
    data: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IMAGES_FETCHED: {
            return {...state, data: action.payload}
        }
        case IMAGES_FAILED: {
            return {...state}
        }
        default: return state
    }
}
