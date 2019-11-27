import React, { Component } from 'react';
import Logo from '../components/logo/Logo';
import Button from '../components/button';
import { Link } from 'react-router-dom';

import Menu from './styles/header';

class Header extends Component {
    render() {
        return (
            <header>
                <Menu>
                    <div className="logo_header">
                        <Logo />
                    </div>
                    <div className="items_menu">
                        <Link className="items_menu_option" to="/">
                            <Button text="Home" />
                        </Link>
                        <Link className="items_menu_option" to="/">
                            <Button text="Desafios" />
                        </Link>

                        <Link className="items_menu_option" to="/login">
                            <Button text="Sou aluno" />
                        </Link>
                        <Link className="items_menu_option" to="/login">
                            <Button text="Sou escola" />
                        </Link>
                        <Link className="items_menu_option" to="/login">
                            <Button text="Quero ser parceiro" />
                        </Link>
                    </div>
                </Menu>
            </header>
        );
    }
}

export default Header;
