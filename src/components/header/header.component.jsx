// libraries
import React from 'react';
// styles
import {
    HeaderContainer,
    LogoContainer,
    TextFieldContainer
} from './header.styles';
// components
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Headroom from 'react-headroom';


const Header = () => {
    return (
        <Headroom>
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
                    size='small'
                />
            </HeaderContainer>
        </Headroom>
    );
};

export default Header;