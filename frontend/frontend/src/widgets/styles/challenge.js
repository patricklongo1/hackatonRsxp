import styled from 'styled-components';

const Box = styled.div`
    max-width: 1200px;
    width: 90%;
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 5%;

    .challenge__first {
        width: 45%;
        padding: 50px;

        .challenge__first_div,
        .challenge__second_div {
            display: flex;
            flex-direction: column;

            .challenge_first_div__buttons {
                display: flex;
                flex-direction: row;
            }
        }

        .challenge__second_div {
            margin-top: 30px;
        }
    }

    .challenge__second {
        width: 55%;
    }
`;

export default Box;
