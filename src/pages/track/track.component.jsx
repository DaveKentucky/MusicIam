// libraries
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// styles
import {
    TrackHeader,
    TrackImage,
    TrackTitleAndAuthor,
    TrackTitle,
    TrackAuthor
} from './track.styles';


const Track = () => {
    const [trackData, setTrackData] = useState({});
    const [trackLyrics, setTrackLyrics] = useState("");
    const routeParams = useParams()

    useEffect(() => {
        const fetchTrackData = async (trackId) => {
            const response = await fetch(`/songs/${ trackId }`);
            const data = await response.json();
            const songData = data.response.song;

            setTrackData({
                'songId': songData.id,
                'title': songData.title,
                'artist': songData.primary_artist.name,
                'apiPath': songData.api_path,
                'album': songData.album.name,
                'imageUrl': songData.album.cover_art_url,
            });
        };
        fetchTrackData(routeParams.trackId);
    }, [routeParams]);

    useEffect(() => {
        const fetchLyrics = async (trackId) => {
            const response = await fetch(`/songs/${ trackId }/lyrics`);
            const data = await response.json();

            setTrackLyrics(data.lyrics);
        };
        fetchLyrics(routeParams.trackId);
    }, [routeParams]);

    console.log(trackData);
    console.log(trackLyrics);

    return (
        <div className='track-container'>
            <TrackHeader>
                <TrackImage imageUrl={ trackData.imageUrl } />
                <TrackTitleAndAuthor>
                <TrackTitle>{ trackData.title }</TrackTitle>
                <TrackAuthor>{ trackData.artist }</TrackAuthor>
                </TrackTitleAndAuthor>
            </TrackHeader>
            { trackLyrics }
        </div>
    );
};

export default Track;