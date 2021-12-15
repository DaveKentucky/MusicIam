// libraries
import React, { useState } from 'react';
// styles
import {
    HomepageContainer,
    MainImageContainer,
    MainTextContainer,
    HomepageContentContainer
} from './homepage.styles';
// components
import HomepageModule from '../../components/homepage-module/homepage-module.component';
// data
import HOMEPAGE_DATA from './homepage.data';


const Homepage = () => {
    const [modules] = useState(HOMEPAGE_DATA.modules)

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
                {
                    modules.map(moduleData => (
                        <HomepageModule
                            key={ moduleData.id }
                            { ...moduleData }
                        />
                    ))
                }
            </HomepageContentContainer>
        </HomepageContainer>
    );
};

export default Homepage;