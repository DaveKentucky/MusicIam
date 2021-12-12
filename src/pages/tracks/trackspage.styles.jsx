import styled from 'styled-components';
import { variables } from '../../scss-variables';


export const TrackspageContainer = styled.div`
    background: ${variables.colors.musiciamPurple};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 25px;
    min-height: 100vh;
`;
TrackspageContainer.displayName = 'TrackspageContainer';