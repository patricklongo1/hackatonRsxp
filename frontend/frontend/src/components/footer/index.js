import React from 'react';
import { FaTwitter, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

import Button from '../button';
import { Container, IconsBox } from './styles';

export default function footer() {
    return (
        <Container>
            <IconsBox>
                <FaTwitter color="#22b573" size={25} cursor="pointer" />
                <FaFacebook color="#22b573" size={25} cursor="pointer" />
                <FaWhatsapp color="#22b573" size={25} cursor="pointer" />
                <FaInstagram color="#22b573" size={25} cursor="pointer" />
            </IconsBox>
            <div>
                <Button text="LogOut" />
            </div>
        </Container>
    );
}
