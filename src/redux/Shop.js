import * as ActionType from './ActionType'


export const Shops = (state = { shop: [] }, action) => {
    switch (action.type) {
        case ActionType.ADD_SHOP:
            return { ...state, shop: action.payload };   
        default:
            return state;
    }
};