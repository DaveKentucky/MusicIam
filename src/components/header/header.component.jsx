import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import Headroom from 'react-headroom';


import {
    HeaderContainer,
    LogoContainer,
    TextFieldContainer
} from './header.styles';

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