import React from 'react'
import './CheckOutProduct.css'
import { useStateValue } from '../../State/StateProvider'

function CheckOutProduct({ id, title, price, image, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // Removing item to the basket
        console.log('Item Added To Basket')
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    };

    console.log(id, title, price, image, rating);


    return (
        <div className="checkoutProduct">
            <img src={image} alt={title} className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <span>£</span>
                    <strong>{price}</strong></p>
                <p className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <span role="img">⭐</span>
                            ))
                    }
                </p>

                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckOutProduct
