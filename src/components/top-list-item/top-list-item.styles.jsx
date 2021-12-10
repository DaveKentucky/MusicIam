import styled from 'styled-components';
import { variables } from '../../scss-variables';


export const TopListItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: solid 3px black;
    height: 100px;
    margin: 5px 10px;
    font-size: 20px;
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
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 75%;
    margin: 0 1% 0 2%;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
TopListItemInfoContainer.displayName = 'TrackInfo';

export const TopListItemTitle = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-right: 3%;
    width: 60%;
    overflow: hidden;
`;
TopListItemTitle.displayName = 'TrackTitle';

export const TopListItemAuthor = styled.p`
    font-size: 22px;
    font-weight: 700;
    margin-left: 3%;
    width: 35%;
    text-align: right;
    overflow: hidden;
`;
TopListItemAuthor.displayName = 'TrackAuthor';