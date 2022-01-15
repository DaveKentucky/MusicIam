// libraries
import React, { useState, useEffect } from 'react';
// styles
import {
    ListContainerLink,
    ItemIndexAndImageContainer,
    Position,
    ThumbnailImageContainer,
    InfoContainer,
    Title,
    Author
} from './results-list-item.styles';


const ResultsListItem = ({ position, title, artist, imageUrl, apiPath }) => {
    const [displayTitle, setDisplayTitle] = useState(title);
    const [displayArtist, setDisplayArtist] = useState(artist);

    useEffect(() => {
        setDisplayTitle(trimDisplayString(title, 32));
    }, [title]);

    useEffect(() => {
        setDisplayArtist(trimDisplayString(artist, 20));
    }, [artist]);
    
    const trimDisplayString = (original, maxLength) => {
        return original.length > maxLength ? original.substring(0, maxLength - 5) + "..." : original;
    };

    return (
        <ListContainerLink to={apiPath}>
            <ItemIndexAndImageContainer>
                <Position>{ position }</Position>
                <ThumbnailImageContainer imageUrl={ imageUrl }/>
            </ItemIndexAndImageContainer>
            <InfoContainer>
                <Title>{ displayTitle }</Title>
                by
                <Author>{ displayArtist }</Author>
            </InfoContainer>
        </ListContainerLink>
    );
};

export default ResultsListItem;