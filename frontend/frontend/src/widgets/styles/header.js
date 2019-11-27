import styled from 'styled-components';

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 60px;
    height: 50px;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    div.items_menu {
        display: flex;
        flex-direction: row;

        .items_menu_option {
            margin-left: 10px;
        }
    }
`;

export default Menu;
