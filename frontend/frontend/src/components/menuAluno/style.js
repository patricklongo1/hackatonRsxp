import styled from 'styled-components';

const MenuAluno = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ul {
        list-style: circle;

        li {
            margin: 20px;
            cursor: pointer;
        }
    }
`;

export default MenuAluno;
