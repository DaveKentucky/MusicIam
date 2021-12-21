// libraries
import React, { useState } from 'react';
// styles
import {
    ArtistspageContainer,
} from './artistspage.styles';
//components
import Searchbox from '../../components/searchbox/searchbox.component';


const Artistspage = () => {
 
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (event) => {
        setSearchInput(event.target.value);
    };

    const searchBoxPlaceholders = [
        "Bon Jovi",
        "RHCP",
        "Michael Jackson",
        "Eminem",
        "Ed Sheeran",
        "The Beatles"
    ];

    return (
        <ArtistspageContainer>
            <Searchbox
                imageUrl="https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                handleChange={ handleChange }
                title="Search artists"
                placeholders={ searchBoxPlaceholders }
            />
        </ArtistspageContainer>
    );
};

export default Artistspage;