// libraries
import React from 'react';
// styles
import {
    LoaderContainer,
    LoaderText
} from './loader.styles';
import { variables } from '../../scss-variables';
// components
import { BarWave } from "react-cssfx-loading";


const Loader = () => {
    return (
        <LoaderContainer>
            <BarWave 
                height='40px'
                width='80px'
                color={ variables.colors.musiciamYellow }
            />
            <LoaderText>
                loading...
            </LoaderText>
        </LoaderContainer>
    );
};

export default Loader;