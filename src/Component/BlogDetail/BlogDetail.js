/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
import { DataBlog, Datalearn, DataComment } from "../../data/data";
import { useParams } from "react-router-dom";
import Learn from "../LearnComponent/learn";
import Comment from "../CommentComponent/CommentComponent";
import "./BlogDetail.scss";
import Submit from "../submitComponent/submit";
import { useEffect } from "react";

function BlogDetail(props) {
    let { id } = useParams();
    const getItem = DataBlog.filter((data) => data.id == id);
    console.log(getItem[0]);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <section className="section sec-Blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="Blog__head">
                                <h2 className="Blog__title">{getItem[0].title}</h2>
                                <p className="Blog__desciption">{getItem[0].des}</p>
                                <div className="blog__group">
                                    <div className="blog__img">
                                        <img src="/img/instructor_images.png" />
                                    </div>
                                    <div className="blog__writer">
                                        <p className="blog__name">Alison Dawn</p>
                                        <p className="blog__date">April 06, 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog__banner">
                    <img src="/img/cover-202.jpeg" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="blog__desc">
                                <h3 className="blog_title">Course Description</h3>
                                <p className="blog__para">
                                    Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan
                                    nec. Quisque bibendum orci ac nibh facilisis, at malesuada
                                    orci congue. Nullam tempus sollicitudin cursus. Ut et
                                    adipiscing erat. Curabitur this is a text link libero tempus
                                    congue.
                                </p>
                                <p className="blog__para">
                                    Duis mattis laoreet neque, et ornare neque sollicitudin at.
                                    Proin sagittis dolor sed mi elementum pretium. Donec et justo
                                    ante. Vivamus egestas sodales est, eu rhoncus urna semper eu.
                                    Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Integer tristique elit lobortis purus
                                    bibendum, quis dictum metus mattis. Phasellus posuere felis
                                    sed eros porttitor mattis. Curabitur massa magna, tempor in
                                    blandit id, porta in ligula. Aliquam laoreet nisl massa, at
                                    interdum mauris sollicitudin et.
                                </p>
                            </div>
                            <div className="blog__blockquote">
                                <p className="blog__qoute">
                                    Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan
                                    nec. Quisque bibendum orci ac nibh facilisis, at malesuada
                                    orci congue.
                                </p>
                                <p className="blog__luis">Luis Pickford</p>
                            </div>
                            <div className="blog__learn">
                                <h3 className="blog_title">Course Description</h3>
                                <div className="row">
                                    {Datalearn.map((number, index) => (
                                        <div className="col-md-6" key={index}>
                                            <Learn title={number} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="blog__requirement">
                                <div className="blog__mask">
                                    <img src={getItem[0].img} />
                                </div>
                                <h3 className="blog_title">Requirements</h3>
                                <div className="blog__require">
                                    <span></span>
                                    <p>
                                        We do not require any previous experience or pre-defined
                                        skills to take this course. A great orientation would be
                                        enough to master UI/UX design.
                                    </p>
                                </div>
                                <div className="blog__require">
                                    <span></span>
                                    <p> A computer with a good internet connection.</p>
                                </div>
                                <div className="blog__require">
                                    <span></span>
                                    <p>Adobe Photoshop (OPTIONAL)</p>
                                </div>
                            </div>
                            <div className="blog__conect">
                                <div className="blog__share">
                                    <img src='/img/share1.png' />
                                    <span>Share this Post</span>
                                </div>
                                <ul className="blog__tag">
                                    <li><a className="blog__tag--item" href="#">Course</a></li>
                                    <li><a className="blog__tag--item" href="#">Timeline</a></li>
                                    <li><a className="blog__tag--item" href="#">Moodle</a></li>
                                    <li><a className="blog__tag--item" href="#">Best</a></li>
                                    <li><a className="blog__tag--item" href="#">Info</a></li>
                                </ul>
                            </div>
                            <div className="blog__comment">
                                <h3 className="blog_title">Comment</h3>
                                <div className="row">
                                    {DataComment.map((cmt, index) => (
                                        <div className="col-md-12" key={index}>
                                            <Comment comment={cmt} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="blog__submit">
                                <Submit/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogDetail;
