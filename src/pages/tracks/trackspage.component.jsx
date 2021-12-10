// libraries
import React, { useState, useEffect } from 'react';
// styles
import {
    TrackspageContainer,
    SearchboxContainer,
    TopListContainer,
    TopListHeader,
} from './trackspage.styles';


const Trackspage = () => {
    const [topTracks, setTopTracks] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/hot')
            const data = await response.json();
            setTopTracks(data.map((result) => ({
                'songId': result['result']['id'],
                'title': result['result']['title'],
                'imageUrl': result['result']['header_image_thumbnail_url'],
                'artist': result['result']['artist_names'],
                'apiPath': result['result']['api_path'],
                'artistId': result['result']['primary_artist']['id']
            })))
        };
        fetchData();
    }, [])

    return (
        <TrackspageContainer>
            <SearchboxContainer>
                We're gonna have a search box here
            </SearchboxContainer>            
            <TopListContainer>
                <TopListHeader>Top List</TopListHeader>
            </TopListContainer>
        </TrackspageContainer>
    );
};

export default Trackspage;