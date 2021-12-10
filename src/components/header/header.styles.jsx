import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { variables } from '../../scss-variables';

export const HeaderContainer = styled.div`
    height: 70px;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-family: 'Poppins', sans-serif;
`;
HeaderContainer.displayName = 'HeaderContainer';

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: ${ variables.fonts.headerFont };
    text-decoration: none;
    color: ${ variables.colors.musiciamPurple };

    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        text-decoration: underline 1px ${ variables.colors.musiciamYellow };
    }
`;
LogoLink.displayName = 'LogoLink';
