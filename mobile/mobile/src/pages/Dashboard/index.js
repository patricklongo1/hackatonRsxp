import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native';

import Header from '../Header';
import ranking from '../../assets/prata2.png';
import {
    Container,
    Content,
    Name,
    PontuationText,
    PutuationValue,
    Ranking,
    ImageRanking,
    RankingText,
} from './styles';

export default function Dashboard({navigation}) {
    const [user, setUser] = useState(navigation.getParam('user'));
    console.log(user);

    return (
        <Container>
            <Header />
            <Content>
                <Name>{user.user.name}</Name>
                <PontuationText>Pontuação</PontuationText>
                <PutuationValue>97</PutuationValue>
                <Ranking>Ranking</Ranking>
                <ImageRanking source={ranking} />
                <RankingText>Prata 2</RankingText>
            </Content>
        </Container>
    );
}

Dashboard.navigationOptions = {
    tabBarLabel: 'Principal',
    tabBarIcon: ({tintColor}) => (
        <Icon name="home" size={25} color={tintColor} />
    ),
};
