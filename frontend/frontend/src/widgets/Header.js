import React, { Component } from 'react';
import Logo from '../components/logo/Logo';
import Item from '../components/menuItem/Item';
import Button from '../components/button'

import Menu from './styles/header';

class Header extends Component {
    render() {
        return (
            <header style={{ height: '50px', marginBottom: '10px', borderBottom: '2px solid #d6d6d6'}}>
                <Menu>
                    <div className="logo_header">
                        <Logo />
                    </div>
                    <div className="items_menu">
                        <Button text="Home" />
                        <Button text="Desafios" />
                        <Button text="Login" />
                    </div>
                </Menu>
            </header>
        );
    }
}

export default Header;
