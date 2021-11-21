import React from 'react';

import {
    HomepageContainer,
    MainImageContainer,
    MainTextContainer
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
                {/* <img src='/headphones.jpg' alt='headphones' /> */}
            </MainImageContainer>
        </HomepageContainer>
    );
};

export default Homepage;