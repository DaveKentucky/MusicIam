import styled from 'styled-components';
import { variables } from '../../scss-variables';


export const HomepageContainer = styled.div`
    height: 100vh;
`;
HomepageContainer.displayName = 'HomepageContainer';

export const MainImageContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: none;
    background-image: url('/headphones.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 1;

    img {
        visibility: hidden;
        z-index: 1;
    }
`;
MainImageContainer.displayName = 'MainImageContainer';

export const MainTextContainer = styled.div`
    margin: 0;
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    font-family: ${ variables.fonts.headerFont };
    font-size: 70px;
    text-align: center;

    h1 {
        width: 70%;
    }
`;
MainTextContainer.displayName = 'MainText';

export const HomepageContentContainer = styled.div`
    background-color: ${ variables.colors.musiciamPurple };
    z-index: 3;
    box-shadow: ${ variables.shadows.sectionShadow };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
HomepageContentContainer.displayName = 'HomepageContent';