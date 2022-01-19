
import './shop.scss'
import ShopItem from '../Component/ShopItem/ShopItem';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { useState, useEffect } from 'react';


function Shop(props) {
    const [menu, setMenu] = useState(false);
    // const [close, setclose] = useState(false);
    const toggle = () => {
        setMenu(!menu);
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className="section sec-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="sec-page__title">Shop</h3>
                            <p className="sec-page__text">Home / Shop</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section sec-shop">
                <div className="container">
                    {/* <div className='row'> */}
                    <div className='shop__page--head row'>
                        <h4 className='shop__found col-md-6'>
                            We found 834 products available for you
                        </h4>
                        <div className='shop__dropdown col-md-6'>
                            <Dropdown isOpen={menu} toggle={toggle}>
                                <DropdownToggle caret>
                                Sort by: Default
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>A to Z</DropdownItem>
                                    <DropdownItem>Z to A</DropdownItem>
                                    <DropdownItem>Price: min to max</DropdownItem>
                                    <DropdownItem>Price: max to min</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="row">
                        {props.item.map((number, index) =>
                            <div className="col-xl-3 col-lg-4 col-md-6" key={number.id}>
                                <ShopItem title={number} />
                            </div>
                        )}
                    </div>
                </div>
                {/* </div> */}

            </section>


        </>
    )
}
export default Shop;