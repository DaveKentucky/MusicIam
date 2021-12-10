import styled from 'styled-components';
import { variables } from '../../scss-variables';


export const TrackspageContainer = styled.div`
    background: ${variables.colors.musiciamPurple};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px 0;
    min-height: 100vh;
`;
TrackspageContainer.displayName = 'TrackspageContainer';

export const SearchboxContainer = styled.div`
    height: 200px;
`;
SearchboxContainer.displayName = 'Searchbox';

export const TopListContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;
TopListContainer.displayName = 'TopList';

export const TopListHeader = styled.h1`
    font-family: ${ variables.fonts.headerFont };
    font-size: 100px;
    margin: 30px 0;
    text-shadow: 2px 4px ${ variables.colors.musiciamYellowWashed };
`;
TopListHeader.displayName = 'TopListHeader';