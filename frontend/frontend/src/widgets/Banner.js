import React, { Component } from 'react';
import { Box, Info, Img } from './styles/banner-home';
import Title from '../components/title/Title';
import Text from '../components/text/Text';
import Button from '../components/buttonBig/Button';
import Coding from '../assets/banner/CodingBanner.svg';

class Banner extends Component {
    render() {
        return (
            <Box>
                <Info>
                    <div className="title__header_first">
                        <Title text="Não sabe programar?" />
                        <Title text="Sem problemas!" />
                    </div>

                    <div className="title__header_second">
                        <Title text="Aqui você vira craque!" />
                        <Text
                            text={`Aprenda a programar de um jeito fácil e dispute com seus amigos e até mesmo com outras escolas`}
                        />
                    </div>

                    <div className="button__header">
                        <Button text="Bora Codar" />
                    </div>
                </Info>
                <Img>
                    <img src={Coding} alt="Garoto codando" />
                </Img>
            </Box>
        );
    }
}

export default Banner;
