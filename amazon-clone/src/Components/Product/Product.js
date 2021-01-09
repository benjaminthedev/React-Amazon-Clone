import React from 'react'
import './Product.css'
import { useStateValue } from '../../State/StateProvider'

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // Adding item to the basket
        console.log('Item Added To Basket')
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    }


    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <span>£</span>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <span role="img">⭐</span>
                            ))
                    }
                </div>
                <img src={image} alt={title} />

                <button onClick={addToBasket}>Add To Basket</button>
            </div>
        </div>
    )
}

export default Product
