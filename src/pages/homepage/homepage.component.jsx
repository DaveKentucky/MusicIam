import React from 'react';

import {
    HomepageContainer,
    MainImageContainer,
    MainTextContainer,
    HomepageContentContainer
} from './homepage.styles';


const Homepage = () => {
    return (
        <HomepageContainer>
            <MainImageContainer>
                <MainTextContainer>
                    <h1>
                        Find the music you love
                    </h1>
                </MainTextContainer>
            </MainImageContainer>
            <HomepageContentContainer>
                
            </HomepageContentContainer>
        </HomepageContainer>
    );
};

export default Homepage;