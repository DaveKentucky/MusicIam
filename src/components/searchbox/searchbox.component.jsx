// libraries
import React from 'react';
// styles
import {
    SearchboxContainer,
    SearchboxHeader,
    SearchboxTextField
} from './searchbox.styles';
import { variables } from '../../scss-variables';


const Searchbox = () => {
    return (
            <SearchboxContainer>
                <SearchboxHeader>placeholder header</SearchboxHeader>
                <SearchboxTextField />
            </SearchboxContainer>
    );
};

export default Searchbox;