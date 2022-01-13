import './RatingComponent.scss'

function Rating(props) {
    const percent = props.percent+'%';

    return (
        <>
            <div className="rating">
                <div className="rating__process"><span style={{width: percent}}></span></div>
                <div className="rating__icon"><img src={props.star} /> <span>{props.total}</span></div>
            </div>
        </>
    )
}

export default Rating;