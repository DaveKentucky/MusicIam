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
    const [displayArtist, setDisplayArtis] = useState(artist);
    useEffect(() => {
        if(displayTitle.length >= 35) setDisplayTitle(displayTitle.substring(0, 30) + '...');
    }, [title]);
    useEffect(() => {
        if(displayArtist.length >= 20) setDisplayArtis(displayArtist.substring(0, 15) + '...');
    })

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