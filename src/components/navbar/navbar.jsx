import React from 'react'
import './navbar.scss'

export default function Navbar() {
    return (
        <>
            <div className="menu">
                <div className="menu__block--one">
                    <h1>CoolRepo</h1>
                    <button>Menu</button>
                    <input type="text"/>
                </div>
                <div className="menu__block--two">
                    <button>Pro</button>
                    <button>Watchlist</button>
                    <button>Sign In</button>
                </div>
            </div>
        </>
    )
}
