// libraries
import React from 'react';
// styles
import {
    HeaderContainer,
    LogoLink,
} from './header.styles';
// components
import Headroom from 'react-headroom';


const Header = () => {
    return (
        <Headroom>
            <HeaderContainer>
                <LogoLink to='/'>
                    <h1>musicIam</h1>
                </LogoLink>
            </HeaderContainer>
        </Headroom>
    );
};

export default Header;