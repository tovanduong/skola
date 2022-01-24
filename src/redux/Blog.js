import * as ActionType from './ActionType'


export const Blogs = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case ActionType.ADD_BLOG:
            return { ...state, blogs: action.payload };   
        default:
            return state;
    }
};