import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id,title,image,price,rating }) {
    const [{  basket }, dispatch] = useStateValue();

    // console.log(id,title,image,price,rating)

    const removeFromBasket = () => {
        // Remove from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            
            <img src={image} alt={title} className="checkoutProduct__image"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span role="img" aria-label="Rating Stars">⭐</span>
                        ))
                    }
                </div>

                <button  onClick={removeFromBasket} className="checkoutProduct__button">Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
