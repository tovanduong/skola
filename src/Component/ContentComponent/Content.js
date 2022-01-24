/* eslint-disable react-hooks/exhaustive-deps */

import "./Content.scss";
import React from "react";
import Home from "../../Page/Home";
import Course from "../../Page/Couser";
import Blog from "../../Page/Blog";
import AboutUs from "../../Page/aboutUs";
import BlogDetail from "../BlogDetail/BlogDetail";
import Contact from "../../Page/contactUs";
import Shop from "../../Page/shop";
import ShopDetail from "../ShopDetail/ShopDetail";
import { Switch, Route, Redirect } from "react-router-dom";
import CourseDetail from "../CourseDetailComponent/CourseDetail";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBlog,
  fetchCourse,
  fetchShop,
  fetchRate,
  fetchComment,
  fetchLearn,
} from "../../redux/ActionCreator";

function Content() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlog());
    dispatch(fetchCourse());
    dispatch(fetchShop());
    dispatch(fetchRate());
    dispatch(fetchComment());
    dispatch(fetchLearn());
  }, []);

  const state = useSelector((state) => state);

  const CourseWithId = () => {

    return (
        <CourseDetail
        course={state.Course.course}      
        rate={state.Rate.rate}
        comment={state.Comment.comment}
        learn={state.Learn.learn}
      />
    );
  };
  console.log(state);
  return (
    <>
      <main className="main-content">
        <Switch>
          <Route
            exact
            path="/home"
            component={() => (
              <Home
                course={state.Course.course}
                blog={state.Blog.blogs}
              />
            )}
          />
          <Route
            exact
            path="/course"
            component={() => <Course course={state.Course.course} />}
          />
          <Route
            exact
            path="/course/:id"
            component={CourseWithId}
          />
          <Route
            exact
            path="/blog"
            component={() => <Blog blog={state.Blog.blogs} />}
          />
          <Route
            exact
            path="/blog/:id"
            component={() => (
              <BlogDetail
                blog={state.Blog.blogs}
                comment={state.Comment.comment}
                learn={state.Learn.learn}
              />
            )}
          />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/shop"
            component={() => (
              <Shop
                shop={state.Shop.shop}
                comment={state.Comment.comment}
                learn={state.Learn.learn}
              />
            )}
          />
          <Route
            exact
            path="/shop/:id"
            component={() => (
              <ShopDetail
                shop={state.Shop.shop}
                comment={state.Comment.comment}
                rate={state.Rate.rate}
              />
            )}
          />
          <Redirect to="/home" />
        </Switch>
      </main>
    </>
  );
}

export default Content;
