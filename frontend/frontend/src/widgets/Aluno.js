import React, { Component } from 'react';
import { Box } from './styles/aluno';
import Menu from '../components/menuAluno/Menu';
import Video from '../assets/images/aula.jpg';
import Desafio from '../assets/images/curso.jpg';

class Aluno extends Component {
    state = {};
    render() {
        return (
            <Box>
                <div className="ensino__aluno">
                    <div className="ensino__aluno_video">
                        <img src={Video} alt="Professor" />
                    </div>
                    <div className="ensino__aluno_menu">
                        <Menu />
                    </div>
                </div>
                <div className="questoes__aluno">
                    <img src={Desafio} alt="" />
                </div>
            </Box>
        );
    }
}

export default Aluno;
