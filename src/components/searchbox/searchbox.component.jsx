// libraries
import React from 'react';
// styles
import {
    SearchboxContainer,
    SearchboxHeader,
    SearchboxTextField
} from './searchbox.styles';
import { variables } from '../../scss-variables';
import { ThemeProvider } from 'styled-components';


const Searchbox = () => {
    return (
        <ThemeProvider theme={ variables.colorTheme }>
            <SearchboxContainer>
                <SearchboxHeader>placeholder header</SearchboxHeader>
                <SearchboxTextField
                    color='secondary'
                    sx={{
                        width: '40%',
                        border: 2,
                        borderRadius: 1,
                        borderColor: 'secondary.main',
                        fontSize: 10,
                    }}
                    
                />
            </SearchboxContainer>
        </ThemeProvider>
    );
};

export default Searchbox;