// libraries
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// styles
import {
    Container,
    Header,
    Image,
    TitleAndAuthorContainer,
    Title,
    Author,
    Lyrics,
    LyricsLine,
    LyricsSpecial,
} from './track.styles';


const Track = () => {
    const [trackData, setTrackData] = useState({});
    const [trackLyrics, setTrackLyrics] = useState([]);
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
        <Container>
            <Header>
                <Image imageUrl={ trackData.imageUrl } />
                <TitleAndAuthorContainer>
                <Title>{ trackData.title }</Title>
                <Author>{ trackData.artist }</Author>
                </TitleAndAuthorContainer>
            </Header>
            <Lyrics>
                {
                    trackLyrics.map((line, index) => (
                        (line.charAt(0) === '[' && line.charAt(line.length - 1) === ']')
                        ? <LyricsSpecial key={index}>{ line }</LyricsSpecial>
                        : <LyricsLine key={index}>{ line }</LyricsLine>
                    ))
                }
            </Lyrics>

        </Container>
    );
};

export default Track;