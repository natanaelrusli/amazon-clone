import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import Subtotal from './Subtotal';

function Chekcout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is empty</h2>
                            <p>You have no items in your basket. To buy one you can click "Add to basket" next to the item</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {/* List out all of the checkout products */}
                            {basket.map((item) => (
                                <CheckoutProduct 
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                />
                            ))}
                        </div>
                    )
                }
            </div>

            {
                basket.length > 0 && (
                <div className="checkout__right">
                    {/* <h1>Subtotal</h1> */}
                    <Subtotal></Subtotal>
                </div>
                )
            }
        </div>
    )
}

export default Chekcout
