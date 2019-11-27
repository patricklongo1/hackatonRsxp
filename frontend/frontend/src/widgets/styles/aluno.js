import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;

    .ensino__aluno {
        display: flex;
        flex-direction: row;
        width: 100%;

        .ensino__aluno_video {
            width: 70%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            img {
                width: 90%;
            }
        }

        .ensino__aluno_menu {
            width: 30%;
        }
    }

    .questoes__aluno {
        margin-top: 50px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        img {
            width: 90%;
        }
    }
`;
