import React from 'react'

export default function Submenu() {
    return (

        <div className="submenu">
            <a href="#kuh" className="submenu-wrapper">
                <div className="submenu-item kuhnya">
                    <div className="submenu-text">
                        <h3>КУХНЯ</h3>
                        <h1>ТА ЗАКУСКИ</h1>
                    </div>
                    <div className="bacground"></div>
                </div>
            </a>
            <a href="#kall" className="submenu-wrapper">
                <div className="submenu-item kalyan">
                    <div className="submenu-text">
                        <h3>КРАЩІ КАЛЬЯНИ</h3>
                        <h1>КАЛЬЯННА КАРТКА</h1>
                    </div>
                    <div className="bacground"></div>
                </div>
            </a>
            <a href="#Koktail" className="submenu-wrapper">
                <div className="submenu-item koktail">
                    <div className="submenu-text">
                        <h3>ОРИГІНАЛЬНІ КОКТЕЙЛІ</h3>
                        <h1>БАРНА КАРТКА</h1>
                    </div>
                    <div className="bacground"></div>
                </div>
            </a>
            <a href="#alco" className="submenu-wrapper">
                <div className="submenu-item alco">
                    <div className="submenu-text">
                        <h3>КРАЩІ НАПОЇ</h3>
                        <h1>АЛКОГОЛЬНА КАРТКА</h1>
                    </div>
                    <div className="bacground"></div>
                </div>
            </a>
        </div>
    )
}
