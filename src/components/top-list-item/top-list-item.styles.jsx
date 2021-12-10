import styled from 'styled-components';
import { variables } from '../../scss-variables';


export const TopListItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: solid 3px black;
    height: 100px;
    margin: 5px 10px;
    font-size: 26px;
    color: black;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.6);
    background-color: ${ variables.colors.musiciamYellowWashed };

    &:hover {
        border-color: ${ variables.colors.musiciamYellow };
        cursor: pointer;
    }
`;
TopListItemContainer.displayName = 'TopListItem';

export const TopListItemIndexAndImageContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
TopListItemIndexAndImageContainer.displayName = 'IndexAndImageContainer';

export const TopListItemPosition = styled.h3`
    flex-grow: 1;
`;
TopListItemPosition.displayName = 'Index';

export const TopListItemThumbnailImageContainer = styled.div`
    height: 90px;
    width: 90px;
    background-image: url(${ ({ imageUrl }) => `${ imageUrl }` });
    background-size: cover;
    background-position: center;
    margin: 2px;
`;
TopListItemThumbnailImageContainer.displayName = 'ThumbnailImage';

export const TopListItemInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 75%;
    margin: 0 5%;
    text-align: left;
    font-weight: 700;
`;
TopListItemInfoContainer.displayName = 'TrackInfo';