import React from 'react';
import {FaPlus} from 'react-icons/fa'
import { Container } from './styles';
import Contador from '../contador';

export default function contador() {
  return (
    <Container>
        <Contador numero="22" icone={<FaPlus color="#fff" size={50} />} texto="Inter Escolar realizados" />
        <Contador numero="1230" icone={<FaPlus color="#fff" size={50} />} texto="Estudantes cadastrados em nossa plataforma" />
        <Contador numero="350" icone={<FaPlus color="#fff" size={50} />} texto="Alunos estagiando em programação" />
    </Container>
  );
}
