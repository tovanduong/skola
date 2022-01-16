/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import "./submit.scss";

function Submit() {
    return (
        <>
            <div className="submit">
                <h3 className="submit__title">Add Reviews & Rate</h3>
                <p className="submit__para">What is it like to Course?</p>
                <div className="submit__star">
                    <img src="/img/star1.png" />
                </div>
                <form action="#">
                    <h4 className="submit__title--form">
                        Review Title
                    </h4>
                    <input
                        type="text"
                        className="submit__input"
                        name="Course"
                        placeholder="Course"
                    />
                    <h4 className="submit__title--form">Review Title</h4>
                    <textarea className="submit__textbox" type="text" placeholder="Content"/>
                    <a type="submit" href="#" className="submit_btn">SUBMIT REVIEW</a>
                </form>
            </div>
        </>
    );
}

export default Submit;
