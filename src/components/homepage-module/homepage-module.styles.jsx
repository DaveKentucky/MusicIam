import styled from 'styled-components';


export const ModuleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    margin-top: 30px;
    border: solid 2px transparent;
    
    &:nth-child(even) {
        border: solid 3px;
        width: 60%;
        box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.6);
    }

    &:hover {
        cursor: pointer;
        border-color: #16e999ff;

        img {
            opacity: 0.7;
        }
    }
`;

export const ModuleImageContainer = styled.div`
    height: 400px;
`;

export const ModuleImage = styled.img`
    height: 100%;
    width: auto;
`;

export const ModuleTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ModuleTitle = styled.h2`
    font-size: 90px;
    color: black;
`;