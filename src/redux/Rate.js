import * as ActionType from './ActionType'


export const Rates = (state = { rate: [] }, action) => {
    switch (action.type) {
        case ActionType.ADD_RATE:
            return { ...state, rate: action.payload };   
        default:
            return state;
    }
};