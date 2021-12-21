import styled from 'styled-components';
import { variables } from '../../scss-variables';


export const SearchboxContainer = styled.div`
    background-image: url(${({ imageUrl }) => `${imageUrl}`});
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