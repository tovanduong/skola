import * as ActionType from './ActionType'

export const Staffs = (state={ 
    staff: []
}, action) => {
    switch (action.type) {
        case ActionType.ADD_STAFF:
            return {...state, staff: action.payload}   
        default:
            return state;
    }
}