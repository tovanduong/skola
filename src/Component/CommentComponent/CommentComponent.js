
import './CommentComponent.scss'

function Comment(props) {
    return (
        <>
            <div className='comment'>
                <div className='comment__img'><img src={props.img} /></div>
                <div className='comment__group'>
                    <p className='comment__name'>{props.name} <span><img src={props.icon} /></span></p>
                    <p className='comment__course'>{props.course}</p>
                    <p className='comment__comment'>{props.comment}</p>
                </div>
            </div>
        </>
    )
}

export default Comment;