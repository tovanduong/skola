import * as ActionType from './ActionType'


export const Learns = (state = { learn: [] }, action) => {
    switch (action.type) {
        case ActionType.ADD_LEARN:
            return { ...state, learn: action.payload };   
        default:
            return state;
    }
};