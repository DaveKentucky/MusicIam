import styled from 'styled-components';
import { variables } from '../../scss_variables';


export const TrackspageContainer = styled.div`
    background: ${variables.colors.musiciamPurple};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
TrackspageContainer.displayName = 'TrackspageContainer';

export const SearchboxContainer = styled.div`
    height: 200px;
`;
SearchboxContainer.displayName = 'Searchbox';

export const TopListContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`;
TopListContainer.displayName = 'TopList';

export const TopListHeader = styled.h1`
    font-size: 80px;
    font-weight: 700;
`;
TopListHeader.displayName = 'TopListHeader';