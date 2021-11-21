import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import {
    HeaderContainer,
    LogoContainer,
} from './header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
        </HeaderContainer>
    );
};

export default Header;