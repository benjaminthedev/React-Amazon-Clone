import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
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

                <button>Add To Basket</button>
            </div>
        </div>
    )
}

export default Product
