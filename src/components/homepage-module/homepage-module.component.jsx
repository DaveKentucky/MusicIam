// libraries
import React from 'react';
// styles
import {
    ModuleContainer,
    ModuleImageContainer,
    ModuleImage,
    ModuleTitleContainer,
    ModuleTitle
} from './homepage-module.styles';


const HomepageModule = ({ title, imageUrl, imageDescription }) => {
    return (
        <ModuleContainer>
            <ModuleImageContainer>
                <ModuleImage src={ imageUrl } alt={ imageDescription } />
            </ModuleImageContainer>
            <ModuleTitleContainer>
                <ModuleTitle>
                    { title }
                </ModuleTitle>
            </ModuleTitleContainer>
        </ModuleContainer>
    );
};

export default HomepageModule;