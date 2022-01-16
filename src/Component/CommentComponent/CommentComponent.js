/* eslint-disable jsx-a11y/alt-text */

import './CommentComponent.scss'

function Comment(props) {
    return (
        <>
            <div className='comment'>
                <div className='comment__img'><img src={props.comment.img} /></div>
                <div className='comment__group'>
                    <p className='comment__name'>{props.comment.name} <span><img src={props.comment.icon} /></span></p>
                    <p className='comment__course'>{props.comment.course}</p>
                    <p className='comment__comment'>{props.comment.comment}</p>
                </div>
            </div>
        </>
    )
}

export default Comment;