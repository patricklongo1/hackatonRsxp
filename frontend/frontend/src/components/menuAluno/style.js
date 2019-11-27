import styled from 'styled-components';

const MenuAluno = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: 40px;

    ul {
        list-style: circle;

        li {
            margin: 20px;
            cursor: pointer;
        }
    }
`;

export default MenuAluno;
