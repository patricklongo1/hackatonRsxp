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

    .title__header_first {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 30px 30px 40px 30px;
        display: flex;
        flex-direction: column;
        color: #fff;
        opacity: 1;
    }

    .title__header_second {
        font-size: 0.9rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        margin: 0px 30px;
    }

    .button__header {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 30px 30px 40px 30px;
        display: flex;
        flex-direction: column;
        color: #fff;
    }
`;

const Img = styled.div`
    margin-right: 40px;
    display: flex;
    flex-direction: row-reverse;
    width: 40%;
    align-items: center;
`;

export { Box, Info, Img };
