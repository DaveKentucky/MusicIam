// libraries
import React from 'react';
import { Link } from 'react-router-dom';
// styles
import {
    ModuleContainer,
    ModuleImageContainer,
    ModuleImage,
    ModuleTitleContainer,
    ModuleTitle
} from './homepage-module.styles';


const HomepageModule = ({ title, path, imageUrl, imageDescription }) => {
    return (
        <ModuleContainer>
            <Link to={path}>
                <ModuleImageContainer>
                    <ModuleImage src={ imageUrl } alt={ imageDescription } />
                </ModuleImageContainer>
                <ModuleTitleContainer>
                    <ModuleTitle>
                        { title }
                    </ModuleTitle>
                </ModuleTitleContainer>
            </Link>
        </ModuleContainer>
    );
};

export default HomepageModule;