import styled from 'styled-components';
import { variables } from '../../scss-variables';


export const ArtistspageContainer = styled.div`
    background: ${variables.colors.musiciamPurple};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;
ArtistspageContainer.displayName = 'ArtistspageContainer';
