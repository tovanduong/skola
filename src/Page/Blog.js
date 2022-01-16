import BlogItem from "../Component/BlogComponent/BlogItem";
import './Blog.scss'
import { DataBlog } from '../data/data'
import { useEffect} from 'react'

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
                        {DataBlog.map((number, index) =>
                            <div className="col-md-4" key={index}>
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