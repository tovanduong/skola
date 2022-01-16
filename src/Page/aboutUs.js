/* eslint-disable jsx-a11y/alt-text */
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import "./aboutUs.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ModalVideo from 'react-modal-video';
import React, { useState } from 'react'
SwiperCore.use([Pagination, Navigation]);
function AboutUs() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="section sec-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="sec-page__title">About Us </h3>
                            <p className="sec-page__text">Home / About Us</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section sec-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="about__story">
                                <div className="about__head row">
                                    <h2 className="about__title">Our Story</h2>
                                    <p className="about__des">Discover your perfect program in our courses.</p>
                                    <p className="about__para col-md-10 offset-md-1 text-center">Convallis vitae, nunc ut venenatis, lectus. Tellus nunc orci dolor nec facilisis et lacus, eu aliquet. Amet imperdiet ac venenatis, lacus. Tortor interdum quisque et, eu etiam ac. Hac lectus at posuere est consequat euismod tellus ut. Dolor ut diam sed dignissim eget gravida. Lectus mattis hac vitae, sed quis vel ornare sed. Ut vel cursus sed id eu. Laoreet bibendum eget dui sapien bibendum sapien. </p>
                                </div>
                                <div className="about__video">
                                    <img src="/img/cover-2.jpg" />
                                    <span></span>
                                    <ModalVideo channel='youtube'
                                        autoplay isOpen={isOpen}
                                        videoId="YiRu9hJ_-3M"
                                        onClose={() => setOpen(false)}
                                    />
                                    <button className="btn"
                                        onClick={() => setOpen(true)}>
                                        <img src='/img/player_btn1.png' />
                                    </button>
                                </div>
                                <div className="about__counter row">
                                    <div className="col-md-3 about__item--count">
                                        <p id="about__c1--n1">
                                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                                {({ isVisible }) => (
                                                    <div className='counter1'>
                                                        {isVisible ? <CountUp end={749} start={0} duration={1} /> : null}
                                                    </div>
                                                )}
                                            </VisibilitySensor>
                                        </p>
                                        <p className="about__name">Creative Events</p>
                                    </div>
                                    <div className="col-md-3 about__item--count">
                                        <p id="about__c2--n1">
                                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                                {({ isVisible }) => (
                                                    <div className='counter1'>
                                                        {isVisible ? <CountUp end={853} start={0} duration={1} /> : null}
                                                    </div>
                                                )}
                                            </VisibilitySensor>
                                        </p>
                                        <p className="about__name">Skilled Tutors</p>
                                    </div>
                                    <div className="col-md-3 about__item--count">
                                        <p id="about__c2--n1">
                                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                                {({ isVisible }) => (
                                                    <div className='counter1'>
                                                        {isVisible ? <CountUp end={28} start={0} duration={1} /> : null}
                                                        <span>K+</span>
                                                    </div>
                                                )}
                                            </VisibilitySensor>
                                        </p>
                                        <p className="about__name">Online Courses</p>
                                    </div>
                                    <div className="col-md-3 about__item--count">
                                        <p id="about__c4--n1">
                                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                                {({ isVisible }) => (
                                                    <div className='counter1'>
                                                        {isVisible ? <CountUp end={53} start={0} duration={1} /> : null}
                                                        <span>K+</span>
                                                    </div>
                                                )}
                                            </VisibilitySensor>
                                        </p>
                                        <p className="about__name">People Worldwide</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='about__sec about__why--backgr'>
                    <div className='container'>
                        <div className='row'>
                            <div className='about__why'>
                                <div className="about__head col-md-12">
                                    <h2 className="about__title">Why Study With Skola</h2>
                                    <p className="about__des">Discover your perfect program in our courses.</p>
                                </div>
                                <div className='about__item row'>
                                    <div className='about__group col-md-4'>
                                        <div className='about__group--img'><img src='/img/icon-about-1.png' /></div>
                                        <h3 className='about__group--title'>Learn Anything</h3>
                                        <p className='about__group--desc'>Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.</p>
                                    </div>
                                    <div className='about__group col-md-4'>
                                        <div className='about__group--img'><img src='/img/icon-about-2.png' /></div>
                                        <h3 className='about__group--title'>Learn Anything</h3>
                                        <p className='about__group--desc'>Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.</p>
                                    </div>
                                    <div className='about__group col-md-4'>
                                        <div className='about__group--img'><img src='/img/icon-about-3.png' /></div>
                                        <h3 className='about__group--title'>Learn Anything</h3>
                                        <p className='about__group--desc'>Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__staff">
                    <div className="about__head">
                        <h2 className="about__title">What Our Students Have To Say</h2>
                        <p className="about__des">Discover your perfect program in our courses.</p>
                    </div>

                    <Swiper
                        breakpoints={{
                            "640": {
                                "slidesPerView": 1,
                                "spaceBetween": 20
                            },
                            "768": {
                                "slidesPerView": 2,
                                "spaceBetween": 20
                            },
                            "1024": {
                                "slidesPerView": 3,
                                "spaceBetween": 30
                            },
                            "1280": {
                                "slidesPerView": 3,
                                "spaceBetween": 30
                            },
                            "1366": {
                                "slidesPerView": 3,
                                "spaceBetween": 30,
                            },
                            "1440": {
                                "slidesPerView": 3,
                                "spaceBetween": 30
                            },
                            "1920": {
                                "slidesPerView": 3,
                                "spaceBetween": 75
                            }
                        }}
                        spaceBetween={10}
                        loop={true}
                        pagination={{
                            el: ".pagination-custom",
                            clickable: true,
                        }}
                        // loop={true}
                        centeredSlides={true}
                        navigation={false}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="about__card">
                                <div className="about__card--inf">
                                    <div className='about__card--img'><img src="./img/instructor_images.jpg" /></div>
                                    <h4 className="about__card--name">Albert Cole</h4>
                                    <p className="about__card--job">Designer</p>
                                    <p className="about__card--deps">
                                        “ I believe in lifelong learning and Skola is a great place to
                                        learn from experts. I've learned a lot and recommend it to all
                                        my friends “
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="about__card">
                                <div className="about__card--inf">
                                    <div className='about__card--img'><img src="./img/instructor_images1.jpg" /></div>
                                    <h4 className="about__card--name">Alison Dawn</h4>
                                    <p className="about__card--job">WordPress Developer</p>
                                    <p className="about__card--deps">
                                        “ I believe in lifelong learning and Skola is a great place to
                                        learn from experts. I've learned a lot and recommend it to all
                                        my friends “
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="about__card">
                                <div className="about__card--inf">
                                    <div className='about__card--img'><img src="./img/instructor_images2.jpg" /></div>
                                    <h4 className="about__card--name">Daniel Parker</h4>
                                    <p className="about__card--job">Front-end Developer</p>
                                    <p className="about__card--deps">
                                        “ I believe in lifelong learning and Skola is a great place to
                                        learn from experts. I've learned a lot and recommend it to all
                                        my friends “
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="about__card">
                                <div className="about__card--inf">
                                    <div className='about__card--img'><img src="./img/instructor_images.jpg" /></div>
                                    <h4 className="about__card--name">Albert Cole</h4>
                                    <p className="about__card--job">Designer</p>
                                    <p className="about__card--deps">
                                        “ I believe in lifelong learning and Skola is a great place to
                                        learn from experts. I've learned a lot and recommend it to all
                                        my friends “
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="about__card">
                                <div className="about__card--inf">
                                    <div className='about__card--img'><img src="./img/instructor_images1.jpg" /></div>
                                    <h4 className="about__card--name">Alison Dawn</h4>
                                    <p className="about__card--job">WordPress Developer</p>
                                    <p className="about__card--deps">
                                        “ I believe in lifelong learning and Skola is a great place to
                                        learn from experts. I've learned a lot and recommend it to all
                                        my friends “
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="about__card">
                                <div className="about__card--inf">
                                    <div className='about__card--img'><img src="./img/instructor_images2.jpg" /></div>
                                    <h4 className="about__card--name">Daniel Parker</h4>
                                    <p className="about__card--job">Front-end Developer</p>
                                    <p className="about__card--deps">
                                        “ I believe in lifelong learning and Skola is a great place to
                                        learn from experts. I've learned a lot and recommend it to all
                                        my friends “
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="pagination-custom"></div>
                </div>
                <div className='newsletter'>
                    <div className="container">
                        <div className="row">
                            <div className='col-md-12'>
                                <div className="about__head">
                                    <h2 className="about__title">Subscribe our newsletter</h2>
                                    <p className="about__des">Your download should start automatically, if not Click here. Should I give up, huh?.</p>
                                </div>
                                <form action='#' className='about__newsletter--form col-md-6'>
                                    <input className='about__newsletter--input' type="text" placeholder="Enter your email" />
                                    <input className='about__newsletter--btn' type="submit" value="subcribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default AboutUs;
