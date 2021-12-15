// libraries
import React, { useState, useEffect } from 'react';
// styles
import {
    TopListItemContainer,
    TopListItemIndexAndImageContainer,
    TopListItemPosition,
    TopListItemThumbnailImageContainer,
    TopListItemInfoContainer,
    TopListItemTitle,
    TopListItemAuthor
} from './top-list-item.styles';


const TopListItem = ({ position, title, artist, imageUrl }) => {
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
        <TopListItemContainer>
            <TopListItemIndexAndImageContainer>
                <TopListItemPosition>{ position }</TopListItemPosition>
                <TopListItemThumbnailImageContainer imageUrl={ imageUrl }/>
            </TopListItemIndexAndImageContainer>
            <TopListItemInfoContainer>
                <TopListItemTitle>{ displayTitle }</TopListItemTitle>
                by
                <TopListItemAuthor>{ displayArtist }</TopListItemAuthor>
            </TopListItemInfoContainer>
        </TopListItemContainer>
    );
};

export default TopListItem;