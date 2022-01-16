import ItemCouser from "../Component/CourseComponent/ItemCouser";
import './Course.scss'
import { DataCourse } from '../data/data'
import { useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

function Course() {
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
                        {DataCourse.map((number, index) =>
                            <div className="col-md-4" key={uuidv4()}>
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