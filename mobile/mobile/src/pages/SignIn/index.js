import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, TouchableOpacity, TextInput} from 'react-native';

import logo from '../../assets/logo.png';
import {Container, Input, Button, TextButton, Logo} from './styles';

export default function SignIn({navigation}) {
    return (
        <Container>
            <Logo source={logo} />
            <Input
                placeholder="Sua matricula"
                placeholderTextColor="#999"
                autoCapitalize="none"
                keyboardType="numeric"
            />
            <Input
                placeholderTextColor="#999"
                placeholder="Sua senha"
                autoCapitalize="none"
                keyboardType="numeric"
            />
            <Button onPress={() => navigation.navigate('Dashboard')}>
                <TextButton>Entrar</TextButton>
            </Button>
        </Container>
    );
}
