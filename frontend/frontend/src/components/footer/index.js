import React from 'react';
import {FaTwitter, FaFacebook, FaWhatsapp, FaInstagram} from 'react-icons/fa'

import Button from '../button'
import { Container, IconsBox } from './styles';

export default function footer() {
  return (
    <Container>
        <IconsBox>
            <FaTwitter color="#22b573" size={25} />
            <FaFacebook color="#22b573" size={25} />
            <FaWhatsapp color="#22b573" size={25} />
            <FaInstagram color="#22b573" size={25} />
        </IconsBox>
        <div>
            <Button text="LogOut"/>
        </div>
    </Container>
  );
}
