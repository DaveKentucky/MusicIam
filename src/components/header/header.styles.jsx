import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
    height: 60px;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-family: 'Poppins', sans-serif;
`;
HeaderContainer.displayName = 'HeaderContainer';

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
LogoContainer.displayName = 'LogoContainer';
