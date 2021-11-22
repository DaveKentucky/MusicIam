import styled from 'styled-components';

import TextField from '@mui/material/TextField';


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

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const TextFieldContainer = styled(TextField)`
    background-color: #ffd730ff;
    overflow: hidden;
    width: 300px;
`;