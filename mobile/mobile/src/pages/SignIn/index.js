import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';

import api from '../../config/api';

import logo from '../../assets/logo.png';
import {Container, Input, Button, TextButton, Logo} from './styles';

export default function SignIn({navigation}) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit() {
        if (!email) {
            alert('Digite seu email');
        } else if (!password) {
            alert('Digite sua senha');
        } else {
            setLoading(true);
            try {
                const response = await api.post('/sessions', {
                    email,
                    password,
                });
                setLoading(false);
                console.log('ok');
                navigation.navigate('Dashboard', {user: response.data});
            } catch (err) {
                setLoading(false);
                console.log(err);
            }
        }
    }

    return (
        <Container>
            <Logo source={logo} />
            <Input
                placeholder="Digite seu email"
                placeholderTextColor="#999"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <Input
                placeholderTextColor="#999"
                placeholder="Digite sua senha"
                autoCapitalize="none"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button onPress={handleSubmit}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <TextButton>Entrar</TextButton>
                )}
            </Button>
        </Container>
    );
}
