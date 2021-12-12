// libraries
import React from 'react';
// styles
import {
    TrackspageContainer,
    SearchboxContainer,
} from './trackspage.styles';
// components
import TopList from '../../components/top-list/top-list.component';
import Searchbox from '../../components/searchbox/searchbox.component';


const Trackspage = () => {
    return (
        <TrackspageContainer>
            <Searchbox />
            <TopList />
        </TrackspageContainer>
    );
};

export default Trackspage;