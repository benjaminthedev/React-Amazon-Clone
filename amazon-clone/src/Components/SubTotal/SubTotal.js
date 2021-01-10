import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../State/StateProvider';
import { getBasketTotal } from '../../State/reducer';

function SubTotal() {

    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            <h1>Subtotal</h1>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal: <strong>({basket.length} items):  {value}</strong></p>

                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>

                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default SubTotal
