import React from 'react';
import { Button } from './styles';

const Botao = props => {
    return (<Button>
        {props.text}
    </Button>)
}

export default Botao;
