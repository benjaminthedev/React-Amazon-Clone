import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasket from "@material-ui/icons/ShoppingBasket"


function Header() {
    return (
        <div>
            <nav className="header">
                <Link to="/">
                    <img
                        src="https://i.ibb.co/pL4sDMs/logo.png"
                        className="header__logo"
                        alt="Amazon Logo"
                    />
                </Link>

                <div className="header__section">
                    <input type="text" className="header__search" />
                    <SearchIcon className="search__icon" />
                </div>

                <div className="header__nav">

                    <Link to="/login" className="header__link">
                        <div className="header__option">
                            <p className="header__optionOne">Hello Ben</p>
                            <p className="header__optionTwo">Sign In</p>
                        </div>
                    </Link>

                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <p className="header__optionOne">Returns</p>
                            <p className="header__optionTwo">& Order</p>
                        </div>
                    </Link>

                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <p className="header__optionOne">Your</p>
                            <p className="header__optionTwo">Prime</p>
                        </div>
                    </Link>
                    {/* Basket Total and Icon  */}
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                            <ShoppingBasket />
                            <p className="header__optionTwo header__basketCount">0</p>
                        </div>
                    </Link>

                </div>


            </nav>
        </div>
    )
}

export default Header
