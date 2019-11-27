import React from 'react';
import { Container, Content, Title, Pontuacao, Ranking } from './styles';
import prata2 from '../../assets/images/Prata2.svg';

export default function mainRank() {
    const user = 'Giovane Nascimento Cuenca';

    return (
        <Container>
            <Content>
                <Title>{user}</Title>
                <Pontuacao>
                    <span>Pontuação</span>
                    <h3>97</h3>
                </Pontuacao>
                <Ranking>
                    <span>Ranking</span>
                    <img src={prata2} alt="ranking" />
                    <h3>Prata 2</h3>
                </Ranking>
            </Content>
        </Container>
    );
}
