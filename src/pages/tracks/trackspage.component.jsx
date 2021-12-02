// libraries
import React from 'react';
// styles
import {
    TrackspageContainer,
    SearchboxContainer,
} from './trackspage.styles';


const Trackspage = () => {
    return (
        <TrackspageContainer>
            <SearchboxContainer>
                We're gonna have a search box here
            </SearchboxContainer>            
            <div className='background-image'>
            </div>
            <div className='top-tracks'></div>
        </TrackspageContainer>
    );
};

export default Trackspage;