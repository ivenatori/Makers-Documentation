import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="navbar_logo">
                        <Link to="/">
                            <img src={Logo} alt="makers logo"></img>
                         </Link>
                        </div>
                    <ul className="navbar_right">
                        <li>Главная</li>
                        <li>Документация</li>
                        <Link to ="/add">
                            <li>Добавить</li>
                            </Link>
                        
                        <li>
                            <input placeholder="поиск"></input>
                        </li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        </header>
       
    );
};

export default Header;