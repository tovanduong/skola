/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ItemCouser.scss";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function ItemCouser(props) {
  return (
    <>
      <section className="section sec__blog">
        <div className="container">
          <div className="titlecard">
            <div className="titlecard__img">
              <img src={props.title.img} alt={props.title.title} />
            </div>
            <div className="titlecard__group">
              <p className="titlecard__text">{props.title.job}</p>
              <h3 className="titlecard__title">
                <NavLink to={`/course/${props.title.id}`}>
                  {props.title.title}
                </NavLink>
              </h3>
              <span className="qty">
                <img src="/img/reader1.png" />5 lesson
              </span>
              <span className="time">
                <img src="/img/clock11.png" />
                8h 12m
              </span>
              <strong className="price">$415.99</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ItemCouser;
