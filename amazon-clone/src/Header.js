import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


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
            </nav>
        </div >
    )
}

export default Header
