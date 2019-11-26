import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #fafafa;
`;

export const ContentPhoto = styled.View`
    margin-top: 20px;
    height: 120px;
    align-items: center;
    justify-content: center;
`;

export const Photo = styled.Image`
    height: 120px;
    width: 120px;
    margin-top: 10px;
    border-radius: 60px;
`;

export const ContentInfo = styled.View`
    margin-top: 10px;
    height: 300px;
`;

export const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
`;

export const ContainInfo = styled.View`
    flex: 1;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    margin: 20px;
    background: #fff;
`;

export const School = styled.View`
    flex: 1;
`;

export const Points = styled.View`
    flex: 1;
    align-items: center;
`;

export const TitleSchool = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const NameSchool = styled.Text.attrs({
    numberOfLines: 2,
})`
    margin-top: 5px;
    font-size: 14px;
`;

export const TitlePts = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 18px;
    font-weight: bold;
`;

export const PointValue = styled.Text`
    font-size: 14px;
    margin-top: 5px;
`;

export const Duality = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const DualityHeader = styled.View``;

export const TitleDuality = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const DualityContent = styled.View`
    flex-direction: row;
    align-self: stretch;
    justify-content: space-between;
    margin: 10px 20px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    background: #fff;
`;
