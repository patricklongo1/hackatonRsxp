import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 200px;
    margin: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: none;
        font-size: 28px;
        color: #22b573;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        text-align: center;
        line-height: 20px;
    }
`;
