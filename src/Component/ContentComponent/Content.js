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
import { connect } from "react-redux";

import ShopDetail from "../ShopDetail/ShopDetail";
import { Switch, Route, Redirect } from "react-router-dom";
import CourseDetail from "../CourseDetailComponent/CourseDetail";
import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import {
  fetchBlog,
  fetchCourse,
  fetchShop,
  fetchRate,
  fetchComment,
  fetchLearn,
} from "../../redux/ActionCreator";
const mapStateToProps = (state) => {
  return {
    Course: state.Course,
    Blog: state.Blog,
    Shop: state.Shop,
    Rate: state.Rate,
    Comment: state.Comment,
    Learn: state.Learn,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBlog: () => {
    dispatch(fetchBlog());
  },
  fetchCourse: () => {
    dispatch(fetchCourse());
  },
  fetchShop: () => {
    dispatch(fetchShop());
  },
  fetchRate: () => {
    dispatch(fetchRate());
  },
  fetchComment: () => {
    dispatch(fetchComment());
  },
  fetchLearn: () => {
    dispatch(fetchLearn());
  },
});

function Content(props) {
//   const dispatch = useDispatch();
  useEffect(() => {
    props.fetchBlog();
    props.fetchCourse();
    props.fetchShop();
    props.fetchRate();
    props.fetchComment();
    props.fetchLearn();
  }, []);

  console.log(props);

  const CourseWithId = () => {
    console.log(props.Course.course);
    return (
      <CourseDetail
        course={props.Course}
        rate={props.Rate.rate}
        comment={props.Comment.comment}
        learn={props.Learn.learn}
      />
    );
  };
  return (
    <>
      <main className="main-content">
        <Switch>
          <Route
            exact
            path="/home"
            component={() => (
              <Home course={props.Course.course} blog={props.Blog.blogs} />
            )}
          />
          <Route
            exact
            path="/course"
            component={() => <Course course={props.Course.course} />}
          />
          <Route exact path="/course/:id" component={CourseWithId} />
          <Route
            exact
            path="/blog"
            component={() => <Blog blog={props.Blog.blogs} />}
          />
          <Route
            exact
            path="/blog/:id"
            component={() => (
              <BlogDetail
                blog={props.Blog.blogs}
                comment={props.Comment.comment}
                learn={props.Learn.learn}
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
                shop={props.Shop.shop}
                comment={props.Comment.comment}
                learn={props.Learn.learn}
              />
            )}
          />
          <Route
            exact
            path="/shop/:id"
            component={() => (
              <ShopDetail
                shop={props.Shop.shop}
                comment={props.Comment.comment}
                rate={props.Rate.rate}
              />
            )}
          />
          <Redirect to="/home" />
        </Switch>
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
