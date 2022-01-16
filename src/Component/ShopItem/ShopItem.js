/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './ShopItem.scss'

function ShopItem(props) {
    console.log(props.title)
    return (
        <>
            <div className='item__card'>
                <div className='item__img'><img src={props.title.img} /></div>
                <div className='item__group'>
                    <h3 className='item__name'>{props.title.name}</h3>
                    <p className='item__price'>{props.title.price}</p>
                </div>
                <a href='#'>Add to cart</a>
            </div>
        </>
    )
}
export default ShopItem;