import React from 'react';
import { Container, Numero, Texto } from './styles';

const Contador = props => {
    return (
        <Container>
            <Numero>
                {props.numero} {props.icone}
            </Numero>
            <Texto>{props.texto}</Texto>
        </Container>
    );
};

export default Contador;
