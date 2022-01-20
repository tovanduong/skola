/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './ShopItem.scss'
import { NavLink } from "react-router-dom";
function ShopItem(props) {
    return (
        <>
            <NavLink to={`/shop/${props.title.id}`} className='item__card'>
                <div className='item__img'><img src={props.title.img} /></div>
                <div className='item__group'>
                    <h3 className='item__name'>{props.title.name}</h3>
                    <p className='item__price'>{props.title.price}</p>
                </div>
                <div className='item__add'>Add to cart</div>
            </NavLink>
        </>
    )
}
export default ShopItem;