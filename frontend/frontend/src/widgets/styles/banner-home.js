import styled from 'styled-components';

const Box = styled.div`
    width: 90%;
    height: 330px;
    margin: 0 5%;
    display: flex;
    flex-direction: row;
    background: linear-gradient(135deg, #22b573, #0d759e);
`;

const Info = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    .title__header_first,
    .title__header_second,
    .button__header {
        margin: 20px 30px;
        display: flex;
        flex-direction: column;
        color: #fff;
    }
`;

export { Box, Info };
