import * as ActionType from './ActionType'


export const Staffs = (state = { staff: [] }, action) => {
    console.log(action)
    switch (action) {
        case ActionType.ADD_STAFF:
            return { ...state, staff: action.payload };
        default:
            return state;
    }
};