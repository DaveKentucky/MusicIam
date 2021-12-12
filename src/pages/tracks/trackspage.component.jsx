// libraries
import React from 'react';
// styles
import {
    TrackspageContainer,
    SearchboxContainer,
} from './trackspage.styles';
// components
import TopList from '../../components/top-list/top-list.component';

const Trackspage = () => {
    return (
        <TrackspageContainer>
            <SearchboxContainer>
                We're gonna have a search box here
            </SearchboxContainer>
            <TopList />
        </TrackspageContainer>
    );
};

export default Trackspage;