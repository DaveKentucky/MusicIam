// libraries
import React, { useState, useEffect } from 'react';
// styles
import {
    TrackspageContainer,
    SearchboxContainer,
    TopListContainer,
    TopListHeader,
} from './trackspage.styles';
// components
import Loader from '../../components/loader/loader.component';
import TopListItem from '../../components/top-list-item/top-list-item.component';


const Trackspage = () => {
    const [topTracks, setTopTracks] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/hot');
            const data = await response.json();
            setTopTracks(data.map((result, index) => {
                const res = result.result;
                return {
                'songId': res.id,
                'position': index + 1,
                'title': res.title,
                'imageUrl': res.header_image_thumbnail_url,
                'artist': res.artist_names,
                'apiPath': res.api_path,
                'artistId': res.primary_artist.id
            }}));
            setIsFetching(false);
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
                {
                    isFetching ?
                    <Loader /> :
                    topTracks.map((track) => (
                        <TopListItem
                            key={ track.songId }
                            { ...track }
                        />
                    ))
                }
            </TopListContainer>
        </TrackspageContainer>
    );
};

export default Trackspage;