import React from 'react';
import MenuAluno from './style';
import { Link } from 'react-router-dom';

const Menu = props => {
    return (
        <MenuAluno>
            <span style={{ marginBottom: '20px' }}>MEUS DESAFIOS</span>
            <ul>
                <li>O que são variaveis?</li>
                <li>Tipos de variaveis</li>
                <li>Trabalhando com variaveis</li>
                <li>Operações</li>
                <li>Tipos primitivos</li>
                <li>Exemplos de tipos</li>
            </ul>

            <span style={{ marginTop: '40px', cursor: 'pointer' }}>
                <Link to="/rank">VER RANKING</Link>
            </span>
        </MenuAluno>
    );
};

export default Menu;
