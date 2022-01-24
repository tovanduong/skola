import ItemCouser from "../Component/CourseComponent/ItemCouser";
import './Course.scss'
import { useEffect} from 'react'

function Course(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    console.log(props.course)
    return (
        <>
            <section className="section sec-page">
                <div className="container">
                    <div className="row" >
                        <div className="col-md-6 offset-md-3" >
                            <div className="sec-page__group text-center">
                                <h3 className='sec-page__title' >Courses Grid 01 </h3>
                                <p className="sec-page__text">Home   /   Courses Grid 01</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section sec-course">
                <div className="container">
                    <div className="row" >
                        {props.course.map((number, index) =>
                            <div className="col-lg-6 col-xl-4" key={number.id}>
                                <ItemCouser title={number} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Course;