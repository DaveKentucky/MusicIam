// libraries
import React, { useState } from 'react';
// styles
import {
    TrackspageContainer,
    TopListContainer,
} from './trackspage.styles';
// components
import TopList from '../../components/top-list/top-list.component';
import Searchbox from '../../components/searchbox/searchbox.component';


const Trackspage = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (event) => {
        setSearchInput(event.target.value);
    };
    const searchBoxPlaceholders = [
        "Bon Jovi - It's my life",
        "RHCP - Californication",
        "Michael Jackson - Billie Jean",
        "Eminem - Mockingbird",
        "Ed Sheeran - Perfect",
        "The Beatles - Here Comes The Sun"
    ];

    return (
        <TrackspageContainer>
            <Searchbox
                handleChange={ handleChange }
                title="Search tracks"
                placeholders={ searchBoxPlaceholders }
            />
            <TopListContainer>
                <TopList />
            </TopListContainer>
        </TrackspageContainer>
    );
};

export default Trackspage;