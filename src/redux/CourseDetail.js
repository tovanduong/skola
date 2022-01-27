import * as ActionType from './ActionType'


export const CourseDetail = (state = { courseId: [] }, action) => {
    switch (action.type) {
        case ActionType.ADD_COURSE_DETAIL:
            return { ...state, courseId: action.payload };   
        default:
            return state;
    }
};