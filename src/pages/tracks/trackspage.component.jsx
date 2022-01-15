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
    const [searchHits, setSearchHits] = useState([]);

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSubmit = async () => {
        if (searchInput.length !== 0) {
            const paramsObject = { search: searchInput };
            const params = new URLSearchParams(paramsObject);
            const response = await fetch('/search?' + params.toString());
            const data = await response.json();
            console.log(data.length)
            const filteredData = data.filter(hit => hit.type === "song")
            setSearchHits(filteredData.map((hit, index) => {
                const res = hit.result;
                return {
                    'songId': res.id,
                    'position': index + 1,
                    'title': res.title,
                    'imageUrl': res.header_image_thumbnail_url,
                    'artist': res.artist_names,
                    'apiPath': res.api_path,
                    'artistId': res.primary_artist.id
                };
            }));
        };
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
                imageUrl="https://images.unsplash.com/photo-1557063673-0493e05da49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                handleChange={ handleChange }
                title="Search tracks"
                placeholders={ searchBoxPlaceholders }
                onKeyPress={e => {
                    if (e.key === 'Enter') handleSubmit();
                }}
            />
            <TopListContainer>
                <TopList />
            </TopListContainer>
        </TrackspageContainer>
    );
};

export default Trackspage;