import styled from 'styled-components';
import { variables } from '../../../scss-variables';

import { Link } from 'react-router-dom';


export const ListContainerLink = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: solid 3px black;
    height: 100px;
    margin: 5px 10px;
    font-size: 20px;
    color: black;
    box-shadow: ${ variables.shadows.boxShadow };
    background-color: ${ variables.colors.musiciamYellowWashed };
    text-decoration: none;

    &:hover {
        border-color: ${ variables.colors.musiciamYellow };
        cursor: pointer;
    }
`;
ListContainerLink.displayName = 'ResultsListItem';

export const ItemIndexAndImageContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
ItemIndexAndImageContainer.displayName = 'IndexAndImageContainer';

export const Position = styled.h3`
    flex-grow: 1;
`;
Position.displayName = 'Index';

export const ThumbnailImageContainer = styled.div`
    height: 90px;
    width: 90px;
    background-image: url(${ ({ imageUrl }) => `${ imageUrl }` });
    background-size: cover;
    background-position: center;
    margin: 2px;
`;
ThumbnailImageContainer.displayName = 'ThumbnailImage';

export const InfoContainer = styled.div`
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
InfoContainer.displayName = 'TrackInfo';

export const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-right: 3%;
    width: 60%;
    overflow: hidden;
`;
Title.displayName = 'TrackTitle';

export const Author = styled.p`
    font-size: 22px;
    font-weight: 700;
    margin-left: 3%;
    width: 35%;
    text-align: right;
    overflow: hidden;
`;
Author.displayName = 'TrackAuthor';