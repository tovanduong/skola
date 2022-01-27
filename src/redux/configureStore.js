import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Blogs } from './Blog'
import { Course } from './Course'
import { CourseDetail } from './CourseDetail';
import { Shops } from './Shop'
import { Rates } from './Rate'
import { Comments } from './Comment'
import { Learns } from './Learn';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Blog: Blogs,
            Course: Course,
            Shop: Shops,
            Rate: Rates,
            Comment: Comments,
            Learn: Learns,
            CourseDetail: CourseDetail
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}