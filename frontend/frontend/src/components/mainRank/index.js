import React, { Fragment } from 'react';
import {
    Container,
    Content,
    Title,
    Pontuacao,
    Ranking,
    Pontos,
} from './styles';
import prata2 from '../../assets/images/Prata2.svg';
import Button from '../buttonBig/Button';

export default function mainRank() {
    const user = 'Giovane Nascimento Cuenca';

    return (
        <Fragment>
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
            <Pontos>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '20px',
                    }}
                >
                    <Button text="Posição Geral"></Button>
                    &nbsp;
                    <Button text="Posição por Liga"></Button>
                </div>
                <table>
                    <thead>
                        <td>Posicao</td>
                        <td>Nome</td>
                        <td>Ranking</td>
                        <td>Pontuação</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Joao da Silva</td>
                            <td>Platina 1</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Pedro da Silva</td>
                            <td>Platina 1</td>
                            <td>91</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>William da Silva</td>
                            <td>Platina 1</td>
                            <td>89</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Maria da Silva</td>
                            <td>Platina 1</td>
                            <td>88</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Josefina da Silva</td>
                            <td>Platina 1</td>
                            <td>74</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Goku da Silva</td>
                            <td>Platina 1</td>
                            <td>71</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Naruto da Silva</td>
                            <td>Platina 1</td>
                            <td>63</td>
                        </tr>
                    </tbody>
                </table>
            </Pontos>
        </Fragment>
    );
}
