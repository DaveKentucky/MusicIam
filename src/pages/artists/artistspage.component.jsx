//@@@
// libraries
import React, { useState } from 'react';

// styles
import {
    ArtistspageContainer,
} from './artistspage.styles';

//components
import Searchbox from '../../components/searchbox/searchbox.component';

//@@@

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
                handleChange={handleChange}
                title="Search artists"
                placeholders={searchBoxPlaceholders}
            />
        </ArtistspageContainer>
    );
}

export default Artistspage;