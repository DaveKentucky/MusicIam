import styled from 'styled-components';
import { variables } from '../../scss-variables';


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
    cursor: default;
`;
TopListHeader.displayName = 'TopListHeader';