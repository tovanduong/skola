import * as ActionType from './ActionType'


export const Course = (state = { course: [] }, action) => {
    switch (action.type) {
        case ActionType.ADD_COURSE:
            return { ...state, course: action.payload };   
        default:
            return state;
    }
};