/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import ShowMoreText from "react-show-more-text";
import { DataRating, DataComment, Datalearn } from '../../data/data';
import { useEffect } from 'react'
import Rating from '../ratingComponent/RatingComponent'
import { DataCourse } from '../../data/data'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Comment from '../CommentComponent/CommentComponent';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import Learn from '../LearnComponent/learn';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import 'react-tabs/style/react-tabs.css';
import './CourseDetail.scss'
function CourseDetail() {
    let { id } = useParams();
    // document.body.scrollTop = 0;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const getItem = DataCourse.filter(data => data.id == id)
    console.log(getItem)
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="section sec-CourseDetail">
                <div className="container">
                    <div className="row" >
                        <div className="col-md-8" >
                            <div className="sec-CourseDetail__group ">
                                <h3 className='sec-CourseDetail__title' >{getItem[0].title}</h3>
                                <p className="sec-CourseDetail__text">{getItem[0].des}</p>
                            </div>
                            <div className="sec-CourseDetail__Created" >
                                <div className='over-round'><img src='/img/Mask Group1.jpg' /> </div>
                                <div className='group'>
                                    <div className='name'>
                                        <h3>Created by</h3>
                                        <p>Alison Dawn</p>
                                    </div>
                                    <div className='category'>
                                        <h3>Categories</h3>
                                        <p>Design</p>
                                    </div>
                                    <div className='Review'>
                                        <h3>Review</h3>
                                        <p>Review</p>
                                    </div>
                                </div>
                            </div>
                            <div className='sec-CourseDetail__Tab'>
                                <Tabs>
                                    <TabList>
                                        <Tab>Overview</Tab>
                                        <Tab>Curriculum</Tab>
                                        <Tab>Instructor</Tab>
                                        <Tab>Reviews</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <h3 className='sec-CourseDetail__sub-title'>Course Description</h3>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={3}
                                            more={<div className='show-group'><p className='show-btn'>Read More</p> <img src='/img/group1.png' /></div>}
                                            less={<div className='show-group'><p className='show-btn'>Less More</p> <img src='/img/group2.png' /></div>} className="content-css"
                                            anchorClass="my-anchor-css-class"
                                            expanded={false}

                                            truncatedEndingComponent={"... "}
                                        >
                                            <p>Do you want to become a UI/UX designer but you don't know where to start? This course will allow you to develop your user interface design skills and you can add UI designer to your CV and start getting clients for your skills.
                                                Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. It's used by everyone from entrepreneurs and start-ups to Apple, Airbnb, Facebook, etc.
                                            </p>
                                        </ShowMoreText>
                                        <h3 className='sec-CourseDetail__sub-title'>What you'll learn</h3>
                                        <div className='list-text'>
                                            <div className='row'>
                                                {Datalearn.map((number, index) =>
                                                    <div className="col-md-6" key={number.id}>
                                                        <Learn title={number} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <h3 className='sec-CourseDetail__sub-title'>Requirements</h3>
                                        <div className='requirement__list' >
                                            <div className='col-md-12'>
                                                <div className='requirement-__item'>
                                                    <span></span>
                                                    <p>We do not require any previous experience or pre-defined skills to take this course. A great orientation would be enough to master UI/UX design.</p>
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='requirement-__item'>
                                                    <span></span>
                                                    <p> A computer with a good internet connection.</p>
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='requirement-__item'>
                                                    <span></span>
                                                    <p>Adobe Photoshop (OPTIONAL)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <h3 className='sec-CourseDetail__sub-title'>Curriculum Description</h3>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={3}
                                            more={<div className='show-group'><p className='show-btn'>Read More</p> <img src='/img/group1.png' /></div>}
                                            less={<div className='show-group'><p className='show-btn'>Less More</p> <img src='/img/group2.png' /></div>} className="content-css"
                                            anchorClass="my-anchor-css-class"
                                            expanded={false}
                                            truncatedEndingComponent={"... "}
                                        >
                                            <p>So to do that I made code like above. Even though it returns some filtered value, it shows same number of array with many false values. I want to find other approaches to do that. So to do that I made code like above. Even though it returns some filtered value, it shows same number of array with many false values. I want to find other approaches to do that..
                                            </p>
                                        </ShowMoreText>

                                        <Accordion allowZeroExpanded>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <span></span>Introduction
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Introduction to the course
                                                        <img src='/img/player_btn.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Introduction
                                                        <img src='/img/unlock1.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Structure of the course
                                                        <img src='/img/player_btn.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Structure of the course
                                                        <img src='/img/unlock1.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <span></span>Design Basics
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Introduction to the course
                                                        <img src='/img/player_btn.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Introduction
                                                        <img src='/img/unlock1.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Structure of the course
                                                        <img src='/img/player_btn.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Structure of the course
                                                        <img src='/img/unlock1.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <span></span>UI Elements
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Introduction to the course
                                                        <img src='/img/player_btn.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Introduction
                                                        <img src='/img/unlock1.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Structure of the course
                                                        <img src='/img/player_btn.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Structure of the course
                                                        <img src='/img/unlock1.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <span></span>Figma Academy
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Introduction to the course
                                                        <img src='/img/player_btn.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Introduction
                                                        <img src='/img/unlock1.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Structure of the course
                                                        <img src='/img/player_btn.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                                <AccordionItemPanel>
                                                    <a className='accor__item' href='#'>
                                                        Structure of the course
                                                        <img src='/img/unlock1.png' />
                                                    </a>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </Accordion>

                                    </TabPanel>
                                    <TabPanel>
                                        <h3 className='sec-CourseDetail__sub-title'>Instructor Description</h3>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={3}
                                            more={<div className='show-group'><p className='show-btn'>Read More</p> <img src='/img/group1.png' /></div>}
                                            less={<div className='show-group'><p className='show-btn'>Less More</p> <img src='/img/group2.png' /></div>} className="content-css"
                                            anchorClass="my-anchor-css-class"
                                            expanded={false}

                                            truncatedEndingComponent={"... "}
                                        >
                                            <p>Do you want to become a UI/UX designer but you don't know where to start? This course will allow you to develop your user interface design skills and you can add UI designer to your CV and start getting clients for your skills.
                                                Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. It's used by everyone from entrepreneurs and start-ups to Apple, Airbnb, Facebook, etc.
                                            </p>
                                        </ShowMoreText>
                                        <h3 className='sec-CourseDetail__sub-title'>About the instructor</h3>
                                        <div className='instructor__inf'>
                                            <div><img src='/img/instructor_images1.jpg' /></div>
                                            <div className='instructor__group'>
                                                <p className='instructor__group--name'>Lauren Handerson</p>
                                                <p className='instructor__group--job'>iOS Developer & UI Designer</p>
                                            </div>
                                        </div>
                                        <div className='instructor__container row'>
                                            <span className='instructor__note col-6 col-lg-3'><img src='/img/vector1.png' />4.87 Instructor rating</span>
                                            <span className='instructor__note col-6 col-lg-3'><img src='/img/blogging1.png' />1,533 reviews</span>
                                            <span className='instructor__note col-6 col-lg-3'><img src='/img/reader1.png' />23,912 students</span>
                                            <span className='instructor__note col-6 col-lg-3'><img src='/img/player_btn.png' />29 courses</span>
                                        </div>
                                        <div className='instructor__introdue'>
                                            <p>I am a UI/UX designer and an iOS developer with having almost six years of experience in application development and also ten years of graphic design and User Interface design.</p>
                                            <p>My passion is helping people to learn new skills in a short-term course and achieve their goals. I've been designing for more than ten years and developing iOS apps for four years. It's my honor if I could help you learn to program in a simple word. I currently am teaching iOS 13, Swift 5, ARKit 3, Sketch 5, Illustrator, Photoshop, Cinema 4D, HTML, CSS, JavaScript, etc.</p>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <h3 className='sec-CourseDetail__sub-title'>Review Description</h3>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={3}
                                            more={<div className='show-group'><p className='show-btn'>Read More</p> <img src='/img/group 1.png' /></div>}
                                            less={<div className='show-group'><p className='show-btn'>Less More</p> <img src='/img/group2.png' /></div>}
                                            className="content-css"
                                            anchorClass="my-anchor-css-class"
                                            expanded={false}
                                            truncatedEndingComponent={"... "}
                                        >
                                            <p>So to do that I made code like above. Even though it returns some filtered value, it shows same number of array with many false values. I want to find other approaches to do that. So to do that I made code like above. Even though it returns some filtered value, it shows same number of array with many false values. I want to find other approaches to do that..
                                            </p>
                                        </ShowMoreText>
                                        <h3 className='sec-CourseDetail__sub-title'>Student feedback</h3>
                                        <div className='row' >
                                            <div className='col-md-4'>
                                                <div className='feedback__group'>
                                                    <p className='feedback__number'>4.93</p>
                                                    <p className='feedback__course-rating'>Course rating</p>
                                                    <p className='feedback__rating'><img src='/img/star1.png' /></p>
                                                </div>
                                            </div>
                                            <div className='col-md-8' >
                                                {
                                                    DataRating.map((item, index) =>
                                                        <Rating key={item.id} percent={item.percent} star={item.img} total={item.total} />
                                                    )
                                                }
                                            </div>
                                            <div className='col-md-12' >
                                                {
                                                    DataComment.map((cmt, index) =>
                                                        <Comment key={cmt.id} comment={cmt} />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                        <div className="col-md-4" >
                            <div className="sec-CourseDetail__inf">
                                <div className='sec-CourseDetail__group'>
                                    <img src={getItem[0].img} alt={getItem[0].title}/>
                                    <ModalVideo channel='youtube'
                                        autoplay isOpen={isOpen}
                                        videoId="YiRu9hJ_-3M"
                                        onClose={() => setOpen(false)}
                                    />
                                    <button className="btn-modal"
                                        onClick={() => setOpen(true)}>
                                        <img src='/img/player_btn1.png' />
                                    </button>
                                </div>
                                <div className='sec-CourseDetail__content'>
                                    <div className='sec-CourseDetail__price'>
                                        <p>$89.99
                                            <del className='sec-CourseDetail__old--price'>$339.99</del>
                                        </p>
                                        <span className='sec-CourseDetail__discount'>91% off</span>
                                    </div>
                                    <div className='sec-CourseDetail__btn'>
                                        <a className='btn-a btn-BUY' href='#'>BUY NOW</a>
                                        <a className='btn-a btn-ENROLL' href='#'>ENROLL</a>
                                    </div>
                                    <ul className='sec-CourseDetail__list'>
                                        <li><h4>Duration</h4> <span>43 weeks</span></li>
                                        <li><h4>Lectures</h4> <span>32</span></li>
                                        <li><h4>Enrolled</h4> <span>1982 students</span></li>
                                        <li><h4>Language</h4> <span>English</span></li>
                                        <li><h4>Skill level</h4> <span>beginner</span></li>
                                        <li><h4>Deadline</h4> <span>06 April 2020</span></li>
                                        <li><h4>Certificate</h4> <span>Yes</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CourseDetail;