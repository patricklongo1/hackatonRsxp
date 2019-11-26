import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #fafafa;
`;

export const Content = styled.View`
    flex: 1;
    padding: 15px;
    margin: 50px;
    border: 2px solid #0d759e;
    border-radius: 4px;
    align-items: center;
`;

export const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
    padding: 2px;
    color: #1a1a1a;
`;

export const PontuationText = styled.Text`
    font-size: 14px;
    color: #525151;
    font-weight: bold;
    margin: 20px 0;
`;

export const PutuationValue = styled.Text`
    font-size: 60px;
    font-weight: bold;
    color: #0d759e;
    margin-bottom: 20px;
`;

export const Ranking = styled.Text`
    font-size: 14px;
    color: #525151;
    font-weight: bold;
    margin: 20px 0;
`;

export const ImageRanking = styled.Image`
    height: 180px;
    width: 180px;
    margin-top: 10px;
`;

export const RankingText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #525151;
    margin-top: 20px;
`;
