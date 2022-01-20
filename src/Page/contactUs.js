/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import './contactUs.scss'
import GoogleMapReact from 'google-map-react';
import React, { useEffect } from 'react'

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const AnyReactComponent = ({ text }) => <div className='contact__myLocation'>{text}</div>;
    

    return (
        <>
            <section className="section sec-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="sec-page__title">Get in touch today! </h3>
                            <p className="sec-page__text">Home / Contact Us</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sec-contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='contact__detail col-md-6'>
                            <h2 className='contact__title'>Contact details</h2>
                            <div className='contact__group1 row'>
                                <div className='contact__location col-md-6 '>
                                    <h3 className='contact__subTitle'><img src='/img/location.png' />Find Us</h3>
                                    <p className='contact__desc'>2301 Ravenswood Rd Madison, WI 53711</p>
                                </div>
                                <div className='contact__phone col-md-6 '>
                                    <h3 className='contact__subTitle'><img src='/img/phone.png' />Phone</h3>
                                    <p className='contact__desc'>+ (315) 905-2321 <br />+ (315) 905-2322</p>
                                </div>
                            </div>
                            <div className='contact__group2 row'>
                                <div className='contact__hour col-md-6 '>
                                    <h3 className='contact__subTitle'><img src='/img/clock1.png' />Working Hours</h3>
                                    <p className='contact__desc'>Mon-Fri: 8 AM - 5 PM <br />Sat-Sun: 8 AM - 2 PM</p>
                                </div>
                                <div className='contact__phone col-md-6 '>
                                    <h3 className='contact__subTitle'><img src='/img/edit.png' />Write to Us</h3>
                                    <p className='contact__desc'>info@skola.com <br />courses@skola.com</p>
                                </div>
                            </div>
                            <div className='contact__group3 row'>
                                <div className='contact__follow col-md-6 '>
                                    <h3 className='contact__subTitle'><img src='/img/share1.png' />Follow Us</h3>
                                    <div className='contact__subIcon'>
                                        <a href='#'><img src='/img/f.png'/></a>
                                        <a href='#'><img src='/img/t.png' /></a>
                                        <a href='#'><img src='/img/insta.png' /></a>
                                        <a href='#'><img src='/img/i.png' /></a>
                                        <a href='#'><img src='/img/s.png' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='contact__form col-md-6'>
                            <h2 className='contact__title'>Have a question?</h2>
                            <form action='#' className='row'>
                                <div className='contact__form--name col-md-6'>
                                    <h3 className='contact__form--tile'>Name</h3>
                                    <input type='text' className='contact__form--input' />
                                </div>
                                <div className='contact__form--name col-md-6'>
                                    <h3 className='contact__form--tile'>Email</h3>
                                    <input type='text' className='contact__form--input' />
                                </div>
                                <div className='contact__form--name col-md-12'>
                                    <h3 className='contact__form--tile'>Message</h3>
                                    <textarea type='text' className='contact__form--textArea' placeholder='content' />
                                </div>
                                <input type='submit' className='contact__form--btn col-md-3' value='Send' />

                            </form>
                        </div>
                    </div>
                </div>

                <div className='contact__map'>
                    <GoogleMapReact
                        defaultCenter={{ lat: 20.653758027763008, lng: 106.46615300204505 }}
                        defaultZoom={30.337844}
                        zoom={13}
                    >
                        <AnyReactComponent
                            lat={20.653758027763008}
                            lng={106.46615300204505}
                            text="Skola Here"
                        />
                    </GoogleMapReact>
                </div>
            </section>
        </>
    )
}

export default Contact;