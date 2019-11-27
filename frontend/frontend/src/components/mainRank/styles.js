import styled from 'styled-components';

export const Container = styled.div`
    height: 459px;
    width: 291px;
    border: 2px solid #22b573;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    height: 90%;
    padding: 10px;
`;

export const Title = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Pontuacao = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0;

    span {
        color: #999;
        font-size: 16px;
        margin-bottom: 5px;
    }

    > h3 {
        font-size: 36px;
        color: #22b573;
        font-weight: bold;
    }
`;

export const Ranking = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;

    span {
        color: #999;
        font-size: 16px;
        margin-bottom: 5px;
    }

    h3 {
        font-size: 30px;
        font-weight: bold;
        margin-top: 10px;
    }
`;
