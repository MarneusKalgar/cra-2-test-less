import {ADD_VAL} from '../actions/counter';

const initialState = {
    count: 0
};

export function counterReducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case ADD_VAL:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    }
}