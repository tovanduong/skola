
import './Content.scss'
import React from "react";
import Home from '../../Page/Home';
import Course from '../../Page/Couser';
import Blog from '../../Page/Blog';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import CourseDetail from '../CourseDetailComponent/CourseDetail';
function Content() {
    return (
        <>
            <main className='main-content'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/course" component={Course} />
                    <Route exact path="/course/:id" component={CourseDetail} />
                    <Route exact path="/blog" component={Blog} />
                    <Redirect to="/" />
                </Switch>
            </main>
        </>
    )
}

export default Content;