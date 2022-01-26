
import './shop.scss'
import ShopItem from '../Component/ShopItem/ShopItem';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { useState, useEffect } from 'react';


function Shop(props) {
    const [menu, setMenu] = useState(false);
    const [item, setItem] = useState('')
    const [items, setItems] = useState([])

    const toggle = () => {
        setMenu(!menu);
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleChange = (e) => {
        const value = e.target.value
        setItem(value)
        console.log(item)
    }
    const handleSubmit = (e) => {
        const findItem = props.shop.filter((el) => {
            return el.name.toUpperCase().includes(item.toUpperCase()) === true
        })
        console.log(findItem)
        setItems(findItem)
        e.preventDefault()
    }
    console.log(typeof items)
    if (items == '') {

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
                        <div className='shop__page--head row'>
                            <h4 className='shop__found col-xl-6 '>
                                We found {props.shop.length} products available for you
                            </h4>
                            <div className='shop__search col-xl-6 col-md-6'>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <input type='text' value={item} onChange={(e) => handleChange(e)} className='shop__input' placeholder='search...' />
                                    <input type='submit' value='Search' className='shop__btn' />
                                </form>
                            </div>
                            <div className='shop__dropdown col-md-6 col-xl-12 text-right'>
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
                            {props.shop.map((number, index) =>
                                <div className="col-xl-3 col-lg-4 col-md-6" key={number.id}>
                                    <ShopItem title={number} />
                                </div>
                            )}
                        </div>
                    </div>

                </section>
            </>
        )
    }
    if (items !== null) {
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
                        <div className='shop__page--head row'>
                            <h4 className='shop__found col-xl-6 '>
                            We found {item.length} products available for you
                            </h4>
                            <div className='shop__search col-xl-6 col-md-6'>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <input type='text' value={item} onChange={(e) => handleChange(e)} className='shop__input' placeholder='search...' />
                                    <input type='submit' value='Search' className='shop__btn' />
                                </form>
                            </div>
                            <div className='shop__dropdown col-md-6 col-xl-12 text-right'>
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
                            {items.map((number, index) =>
                                <div className="col-xl-3 col-lg-4 col-md-6" key={number.id}>
                                    <ShopItem title={number} />
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Shop;