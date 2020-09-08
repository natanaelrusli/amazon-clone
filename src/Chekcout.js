import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';

function Chekcout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <img 
                src="https://bloximages.chicago2.vip.townnews.com/journaltimes.com/content/tncms/assets/v3/classifieds/5/4d/54d97033-a0bc-5c34-b950-f7ca5d0bc0a3/5f36ee2015fd5.preview.jpg?resize=1200%2C364" 
                alt="Ad" 
                className="checkout__ad"
            />
            {
                basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2>Your Shopping Basket</h2>
                    </div>
                )
            }
        </div>
    )
}

export default Chekcout
