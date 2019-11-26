import React, { Component } from 'react';
import Box from './styles/challenge';
import Title from '../components/title/Title';
import Text from '../components/text/Text';
import ButtonR from '../components/buttonRounded/Button';

class Challenge extends Component {
    render() {
        return (
            <Box>
                <div className="challenge__first">
                    <div className="challenge__first_div">
                        <Title text="Nós te desafiamos" color="#22b573" />
                        <span style={{ width: '330px' }}>
                            <Text text="A programação faz parte do nosso dia a dia e está presente em TODAS as áreas de nossa vida. Vamos mostrar como suas áreas de interesse utilizam tecnologias." />
                        </span>
                        <div className="challenge_first_div__buttons">
                            <ButtonR text="Esporte" />
                            <ButtonR text="Televisão" />
                            <ButtonR text="Música" />
                            <ButtonR text="Ver todos" />
                        </div>
                    </div>

                    <div className="challenge__second_div">
                        <Title text="Ranking" color="#22b573" />
                        <span style={{ width: '330px' }}>
                            <Text text="Aprender programação de uma forma simples e divertida. Realize nossos desafios e suba de nível." />
                        </span>
                    </div>
                </div>
                <div className="challenge__second">2</div>
            </Box>
        );
    }
}

export default Challenge;
