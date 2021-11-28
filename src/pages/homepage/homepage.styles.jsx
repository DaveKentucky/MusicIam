import styled from 'styled-components';


export const HomepageContainer = styled.div`
    height: 100vh;
`;

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

export const MainTextContainer = styled.div`
    margin: 0;
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    font-family: 'Lobster';
    font-size: 70px;
    text-align: center;

    h1 {
        width: 70%;
    }
`;

export const HomepageContentContainer = styled.div`
    background-color: #713987;
    z-index: 3;
    box-shadow: 0px -3px 14px 7px rgba(0,0,0,0.8);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;