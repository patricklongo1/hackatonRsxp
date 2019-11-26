import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native';

import Header from '../Header';
import {
    Container,
    ContentPhoto,
    Photo,
    Name,
    ContentInfo,
    ContainInfo,
    School,
    TitleSchool,
    Points,
    TitlePts,
    NameSchool,
    PointValue,
    Duality,
    DualityHeader,
    TitleDuality,
    DualityContent,
} from './styles';

export default function Profile() {
    return (
        <Container>
            <Header />
            <ContentPhoto>
                <Photo
                    source={{
                        uri:
                            'https://api.adorable.io/avatars/120/abott@adorable.png',
                    }}
                />
                <Name>Juliano Nogueira</Name>
            </ContentPhoto>
            <ContentInfo>
                <ContainInfo>
                    <ScrollView
                        // eslint-disable-next-line react-native/no-inline-styles
                        contentContainerStyle={{flexDirection: 'row'}}
                        showsVerticalScrollIndicator={false}>
                        <School>
                            <TitleSchool>Escolas</TitleSchool>
                            <NameSchool>Escola A</NameSchool>
                            <NameSchool>Escola A</NameSchool>
                            <NameSchool>Escola A</NameSchool>
                            <NameSchool>Escola A</NameSchool>
                            <NameSchool>Escola A</NameSchool>
                            <NameSchool>Escola A</NameSchool>
                            <NameSchool>Escola A</NameSchool>
                            <NameSchool>Escola A</NameSchool>
                            <NameSchool>Escola A</NameSchool>
                            <NameSchool>Escola A</NameSchool>
                            <NameSchool>Escola A</NameSchool>
                            <NameSchool>Escola A</NameSchool>
                        </School>
                        <Points>
                            <TitlePts>Pontuacão</TitlePts>
                            <PointValue>15</PointValue>
                            <PointValue>15</PointValue>
                            <PointValue>15</PointValue>
                            <PointValue>15</PointValue>
                            <PointValue>15</PointValue>
                            <PointValue>15</PointValue>
                            <PointValue>15</PointValue>
                            <PointValue>15</PointValue>
                            <PointValue>15</PointValue>
                            <PointValue>15</PointValue>
                            <PointValue>15</PointValue>
                            <PointValue>15</PointValue>
                        </Points>
                    </ScrollView>
                </ContainInfo>
            </ContentInfo>
            <Duality>
                <DualityHeader>
                    <TitleDuality>Próxima disputa</TitleDuality>
                </DualityHeader>
                <DualityContent>
                    <NameSchool>Escola A</NameSchool>
                    <NameSchool>VS</NameSchool>
                    <NameSchool>Escola B</NameSchool>
                </DualityContent>
            </Duality>
        </Container>
    );
}
Profile.navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({tintColor}) => (
        <Icon name="person" size={25} color={tintColor} />
    ),
};
