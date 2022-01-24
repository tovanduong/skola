import * as ActionType from './ActionType'


export const Comments = (state = { comment: [] }, action) => {
    switch (action.type) {
        case ActionType.ADD_COMMENT:
            return { ...state, comment: action.payload };   
        default:
            return state;
    }
};