// libraries
import React from 'react';
// styles
import {
    ModuleContainer,
    ModuleLink,
    ModuleImageContainer,
    ModuleImage,
    ModuleTitleContainer,
    ModuleTitle
} from './homepage-module.styles';


const HomepageModule = ({ title, path, imageUrl, imageDescription }) => {
    return (
        <ModuleContainer>
            <ModuleLink to={ path }>
                <ModuleTitleContainer>
                    <ModuleTitle>
                        { title }
                    </ModuleTitle>
                </ModuleTitleContainer>
                <ModuleImageContainer>
                    <ModuleImage src={ imageUrl } alt={ imageDescription } />
                </ModuleImageContainer>
            </ModuleLink>
        </ModuleContainer>
    );
};

export default HomepageModule;