import React from 'react'
import Right from './Right'

export default function NavBar() {
    return (
        <nav className="menu">
            <div className="menu__logo">
                <a href="/">Logo</a>
            </div>
            <div className="menu__container">
                <div className="menu_rigth">
                    <Right/>
                </div>
            </div>
            
        </nav>
    )
}
