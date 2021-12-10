// libraries
import React from 'react';
// styles
import {
    TopListItemContainer,
    TopListItemIndexAndImageContainer,
    TopListItemPosition,
    TopListItemThumbnailImageContainer,
    TopListItemInfoContainer
} from './top-list-item.styles';


const TopListItem = ({ position, title, artist, imageUrl }) => {
    return (
        <TopListItemContainer>
            <TopListItemIndexAndImageContainer>
                <TopListItemPosition>{ position }</TopListItemPosition>
                <TopListItemThumbnailImageContainer imageUrl={ imageUrl }/>
            </TopListItemIndexAndImageContainer>
            <TopListItemInfoContainer>
                { title } by { artist }
            </TopListItemInfoContainer>
        </TopListItemContainer>
    );
};

export default TopListItem;