import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { variables } from '../../scss-variables';


export const ModuleContainer = styled.div`
    margin: 30px 0;
    border: solid 3px;
    background-color: black;
    box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.6);
    max-width: 60%;
    &:hover {
        cursor: pointer;
        border-color: ${variables.colors.musiciamYellow};
    }
`;
ModuleContainer.displayName = 'ModuleContainer';

export const ModuleLink = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &:hover {
        &>div:first-child {
            width: 300px;
            h2 {
                transition-duration: 1s;
                transition-delay: 0.5s;
                opacity: 1;
            }
        }
    }
`;
ModuleLink.displayName = 'ModuleLink';

export const ModuleImageContainer = styled.div`
    height: 500px;
    overflow: hidden;
`;
ModuleImageContainer.displayName = 'ModuleImageContainer';

export const ModuleImage = styled.img`
    height: 100%;
    width: auto;
`;
ModuleImage.displayName = 'ModuleImage';

export const ModuleTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0px;
    transform: rotate(-90deg);
    transition: width 1.5s ease-out 0s;
`;
ModuleTitleContainer.displayName = 'ModuleTitleContainer';

export const ModuleTitle = styled.h2`
    font-size: 120px;
    font-weight: 300;
    color: ${variables.colors.musiciamYellow};
    opacity: 0;
    transition: opacity 0.5s linear;
`;
ModuleTitle.displayName = 'ModuleTitle';