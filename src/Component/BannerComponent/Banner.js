/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Banner.scss'


function Banner() {
    return (
        <>
            <section className="section sec-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-md-2">
                            <img src='./img/vector.png' />
                        </div>
                        <div className="col-md-6 order-md-1">
                            <div className="title">
                                <h2 className='sec-banner__title'>Learn From <strong>AnyWhere</strong> </h2>
                                <p className='sec-banner__text'>Technology is bringing a massive wave of evolution on learning
                                    things in different ways.
                                </p>
                            </div>
                            <div className="btn-banner">
                                <a href="#" className="btn-a">GET STARTED</a>
                                <a href="#" className="btn-a d-none d-md-inline-block">VIEW COURSES</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;