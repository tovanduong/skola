import BlogItem from "../Component/BlogComponent/BlogItem";
import './Blog.scss'
import { useEffect} from 'react'

function Blog(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    console.log(props)
    return (
        <>
            <section className="section sec-page">
                <div className="container">
                    <div className="row" >
                        <div className="col-md-6 offset-md-3" >
                            <div className="sec-page__group text-center">
                                <h3 className='sec-page__title' >Blog </h3>
                                <p className="sec-page__text">Home   /   Blog</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section sec-Blogs">
                <div className="container">
                    <div className="row" >
                        {props.blog.map((number, index) =>
                            <div className="col-lg-6 col-xl-4" key={number.id}>
                                <BlogItem title={number} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Blog;