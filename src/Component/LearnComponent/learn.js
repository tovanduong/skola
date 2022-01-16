/* eslint-disable jsx-a11y/alt-text */

import './learn.scss'

function Learn(props) {
    console.log(props)
    return (
        <>
            <div className='list-text__item'>
               <img src={props.title.img} />
                <p>{props.title.title} </p>
            </div>
        </>
    )
}

export default Learn;