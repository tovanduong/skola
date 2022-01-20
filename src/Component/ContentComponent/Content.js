
import './Content.scss'
import React from "react";
import Home from '../../Page/Home';
import Course from '../../Page/Couser';
import Blog from '../../Page/Blog';
import AboutUs from '../../Page/aboutUs';
import BlogDetail from '../BlogDetail/BlogDetail';
import Contact from '../../Page/contactUs';
import Shop from '../../Page/shop';
import ShopDetail from '../ShopDetail/ShopDetail';
import { DataShop } from '../../data/data';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import CourseDetail from '../CourseDetailComponent/CourseDetail';




function Content() {
    return (
        <>
            <main className='main-content'>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/course" component={Course} />
                    <Route exact path="/course/:id" component={CourseDetail} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/:id" component={BlogDetail} />
                    <Route exact path="/about" component={AboutUs} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/shop" component={() => <Shop item={DataShop}/>} />
                    <Route exact path="/shop/:id" component={() => <ShopDetail item={DataShop}/>} />
                    <Redirect to="/home" />
                </Switch>
            </main>
        </>
    )
}

export default (Content);