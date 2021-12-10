// libraries
import React from 'react';
// styles
import {
    HeaderContainer,
    LogoContainer,
} from './header.styles';
// components
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Headroom from 'react-headroom';


const Header = () => {
    return (
        <Headroom>
            <HeaderContainer>
                <LogoContainer to='/'>
                    <Logo />
                </LogoContainer>
            </HeaderContainer>
        </Headroom>
    );
};

export default Header;