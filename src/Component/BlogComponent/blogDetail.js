/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./blogDetail.scss";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function BlogDetail(props) {
  return (
    <>
      <section className="section sec__blog">
        <div className="container">
          <div className="titlecard">
            <div className="titlecard__img">
              <img src={props.title.img} alt={props.title.title} />
            </div>
            <div className="titlecard__group">
              <div className="News__infor">
                <p className="News__writer">
                  <img src="/img/user1.png" />
                  {props.title.name}
                  <span className="News__date">
                    <img src="/img/calendar1.png" />
                    {props.title.date}
                  </span>
                </p>
              </div>
              <h3 className="titlecard__title">
                <NavLink to={`/blog/${props.title.id}`}>
                  {props.title.title}
                </NavLink>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
