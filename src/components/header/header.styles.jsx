import styled from 'styled-components';

import TextField from '@mui/material/TextField';


export const HeaderContainer = styled.div`
    height: 70px;
    background-color: #3b3b3b;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-family: 'Poppins', sans-serif;
`;

export const LogoContainer = styled.div`
    cursor: pointer;
`;

export const TextFieldContainer = styled(TextField)`
    background-color: #ffd730ff;
    overflow: hidden;
    width: 300px;
`;