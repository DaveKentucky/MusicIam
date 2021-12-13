import styled from 'styled-components';
import { variables } from '../../scss-variables';


export const SearchboxContainer = styled.div`
    background-image: url('https://images.unsplash.com/photo-1557063673-0493e05da49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80');
    background-size: cover;
    background-position: left;
    height: 100vh;
    width: 100%;
`;
SearchboxContainer.displayName = 'SearchboxContainer';

export const SearchboxHeader = styled.h1`
    font-size: 70px;
    margin: 30px 0 15px;
    cursor: default;
`;
SearchboxHeader.displayName = 'Header';

export const SearchboxTextField = styled.input`
    height: 80px;
    width: 40%;
    opacity: 0.75;
    border: solid 2px;
    padding: 0 20px;
    box-shadow: ${ variables.shadows.boxShadow };
    font-size: 24px;
    font-family: ${ variables.fonts.mainFont };
    font-weight: 500;

    &::placeholder {
        font-style: italic;
    }

    &:focus {
        outline: none;
        border-color: ${ variables.colors.musiciamYellow };
    }
`;
SearchboxTextField.displayName = 'TextField';