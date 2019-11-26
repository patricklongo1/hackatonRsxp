import React from 'react';
import {FaPlus} from 'react-icons/fa'
import { Container } from './styles';
import Contador from '../contador';

const Plus = FaPlus;

export default function contador() {
  return (
    <Container>
        <Contador numero="22" icone={Plus} texto="Inter Escolar realizados" />
    </Container>
  );
}
