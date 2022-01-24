/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */

import './ShopDetail.scss'
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Submit from '../submitComponent/submit'
import Comment from '../CommentComponent/CommentComponent';
import Rating from '../ratingComponent/RatingComponent';

function ShopDetail(props) {
    console.log(props)
    let { id } = useParams();
    const getItem = props.shop.filter((data) => data.id == id);
    console.log(getItem)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className="section sec-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="sec-page__title">Shop Single</h3>
                            <p className="sec-page__text">Home   /   Shop Single</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section sec-shopDetail">
                <div className="container">
                    <div className='row'>
                        <div className='shopDetail__gallery col-md-6'><img src={getItem[0].img} /></div>
                        <div className='shopDetail__inner col-md-6'>
                            <h3 className='shopDetail__name'>{getItem[0].name}</h3>
                            <p className='shopDetail__para'>{getItem[0].des}</p>
                            <p className='shopDetail__para'>Total price:</p>
                            <p className='shopDetail__price'>{getItem[0].price} <del>$959</del></p>
                            <div className='shopDetail__group'>
                                <h4 className='shopDetail__h4'>Quantity</h4>
                                <input type='number' placeholder='1' min={1} className='shopDetail__input' />
                                <div className='shopDetail__group--img'><img src='/img/Frame5.png' /></div>
                                <p className='shopDetail__para'>432 in stock</p>
                            </div>
                            <div className='shopDetail__coverBtn'><NavLink className='shopDetail__btn' to='/home'>Add to Cart</NavLink><img src='/img/save.png' /></div>
                            <div className='shopDetail__sku'>
                                <p className='shopDetail__para shopDetail__sku--title'>Sku:</p>
                                <p className='shopDetail__para shopDetail__sku--content'>{getItem[0].Sku}</p>
                            </div>
                            <div className='shopDetail__sku '>
                                <p className='shopDetail__para shopDetail__sku--title'>Category:</p>
                                <p className='shopDetail__para shopDetail__sku--content'>{getItem[0].Category}</p>
                            </div>
                            <div className='shopDetail__sku '>
                                <p className='shopDetail__para shopDetail__sku--title'>Tags:</p>
                                <p className='shopDetail__para shopDetail__sku--content'>{getItem[0].Tag}</p>
                            </div>
                        </div>
                        <div className='shopDetail__tab'>
                            <Tabs className='col-md-12'>
                                <TabList>
                                    <Tab>Description</Tab>
                                    <Tab>Reviews (2)</Tab>
                                </TabList>
                                <TabPanel className='col-md-8'>
                                    <h3 className='shopDetail__desc--title'>Details</h3>
                                    <p className='shopDetail__para'>Do you want to become a UI/UX designer but you don't know where to start? This course will allow you to develop your user interface design skills and you can add UI designer to your CV and start getting clients for your skills. <br /><br />
                                        Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. It's used by everyone from entrepreneurs and start-ups to Apple, Airbnb, Facebook, etc.</p>
                                    <h3 className='shopDetail__desc--title'>Material and care</h3>
                                    <div className='row shopDetail__desc--MaC'>
                                        <div className='shopDetail__desc--material col-6'>
                                            <span></span>
                                            <p className='shopDetail__para'>Main: 100% Cotton</p>
                                        </div>
                                        <div className='shopDetail__desc--material col-6'>
                                            <span></span>
                                            <p className='shopDetail__para'>One size fits all</p>
                                        </div>
                                        <div className='shopDetail__desc--material col-6'>
                                            <span></span>
                                            <p className='shopDetail__para'>Soft twill</p>
                                        </div>
                                        <div className='shopDetail__desc--material col-6'>
                                            <span></span>
                                            <p className='shopDetail__para'>Imported</p>
                                        </div>
                                        <div className='shopDetail__desc--material col-6'>
                                            <span></span>
                                            <p className='shopDetail__para'>Ribbed, diagonal pattern</p>
                                        </div>
                                        <div className='shopDetail__desc--material col-6'>
                                            <span></span>
                                            <p className='shopDetail__para'>Product color: Dark greenish</p>
                                        </div>
                                    </div>

                                </TabPanel>
                                <TabPanel className='col-md-8 offset-md-2'>
                                    <div className='shopDetail__review'>
                                        <div className='shopDetail__rating row' >
                                            <div className='col-lg-12 col-xl-4'>
                                                <div className='shopDetail__group2'>
                                                    <p className='shopDetail__number'>4.93</p>
                                                    <p className='shopDetail__review--rating'>Review rating</p>
                                                    <p className='shopDetail__rating'><img src='/img/star1.png' /></p>
                                                </div>
                                            </div>
                                            <div className='col-xl-8 col-lg-12'>
                                                {
                                                    props.rate.map((item, index) =>
                                                        <Rating key={item.id} percent={item.percent} star={item.img} total={item.total} />
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className='shopDetail__comment'>
                                            {
                                                props.comment.map((cmt, index) =>
                                                    <Comment key={cmt.id} comment={cmt} />
                                                )
                                            }
                                        </div>
                                        <div className="shopDetail__submit">
                                            <Submit />
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopDetail;