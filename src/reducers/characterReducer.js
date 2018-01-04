import { SET_CHARACTER } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case SET_CHARACTER:
            return action.payload;
        default:
            return state;
    }
}