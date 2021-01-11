import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import React from 'react'
import { useStateValue } from '../../State/StateProvider';
import './CheckOut.css'
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct';
import SubTotal from '../SubTotal/SubTotal'

function CheckOut() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout__wrapper">
            <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/AmazonBusinessPayments/AB/ILM/Triton/422-sbcc-onsite-ilm-d-2-uk-1300x90._CB414951906_.png" />

            <div className="checkout">
                <div className="checkout__left">
                    {basket?.length === 0 ? (
                        <div className="checkout__empty">
                            <img src="https://m.media-amazon.com/images/G/02/cart/empty/kettle-desaturated._CB424695504_.svg" />
                            <div className="checkout__infoWrap">
                                <h2>Your Amazon Basket is empty.</h2>
                                <p>Find some great deals today!</p>
                                <a href="/" className="checkout__button">Shop today's deals</a>
                            </div>
                        </div>
                    ) : (
                            <div className="checkout__items">
                                <h2 className="checkout__title">Your Shopping Basket</h2>
                            </div>
                        )}

                    {basket.map(item => (
                        <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>

                {basket.length > 0 && (
                    <div className="checkout__right">
                        <SubTotal />
                    </div>
                )}
            </div>


            <div className="checkout__terms">
                The price and availability of items at Amazon.co.uk are subject to change. The shopping basket is a temporary place to store a list of your items and reflects each item's most recent price.
                Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
            </div>
        </div>
    )
}

export default CheckOut;
