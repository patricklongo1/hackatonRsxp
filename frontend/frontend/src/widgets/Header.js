import React, { Component } from 'react';
import Logo from '../components/logo/Logo';
import Item from '../components/menuItem/Item';
import Menu from './styles/header';

class Header extends Component {
    render() {
        return (
            <header style={{ height: '50px' }}>
                <Menu>
                    <div className="logo_header">
                        <Logo />
                    </div>
                    <div className="items_menu">
                        <Item item="Home" />
                        <Item item="Desafios" />
                        <Item item="Login" />
                    </div>
                </Menu>
            </header>
        );
    }
}

export default Header;
