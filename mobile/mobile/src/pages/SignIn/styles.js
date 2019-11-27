import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'cover',
})`
    height: 200px;
    width: 300px;
`;

export const Input = styled.TextInput`
    align-self: stretch;
    height: 44px;
    margin: 10px 35px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

export const Button = styled(RectButton)`
    align-self: stretch;
    justify-content: center;
    align-items: center;
    height: 44px;
    background: #0d759e;
    border-radius: 4px;
    margin: 15px 35px;
`;

export const TextButton = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;
