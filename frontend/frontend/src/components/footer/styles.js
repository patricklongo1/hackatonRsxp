import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    border-top: 2px solid #d6d6d6;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const IconsBox = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    svg {
        margin: 0 15px;
    }
`;
