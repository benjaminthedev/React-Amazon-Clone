import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"


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

                    <Link className="header__link">
                        <span>Link</span>
                        <span>Link</span>
                        <span>Link</span>

                    </Link>

                </div>


            </nav>
        </div>
    )
}

export default Header
