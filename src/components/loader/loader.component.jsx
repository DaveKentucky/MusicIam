// libraries
import React from 'react';
// styles
import {
    LoaderContainer,
    LoaderBarWave
} from './loader.styles';
import { variables } from '../../scss-variables';
// components
import { BarWave } from "react-cssfx-loading";


const Loader = () => {
    return (
        <LoaderContainer>
            <BarWave 
                height='30px'
                width='60px'
                color={ variables.colors.musiciamYellow }
            />
        </LoaderContainer>
    );
};

export default Loader;