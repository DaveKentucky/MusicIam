import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';


import {
    HeaderContainer,
    LogoContainer,
    TextFieldContainer
} from './header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <TextFieldContainer
                id='search-field'
                type='search'
                variant='filled'
                placeholder='Search'
                color='warning'
            />
        </HeaderContainer>
    );
};

export default Header;