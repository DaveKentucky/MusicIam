import styled from 'styled-components';


export const ModuleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 30px 0;
    border: solid 3px;
    position: relative;
    box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.6);

    &:hover {
        cursor: pointer;
        border-color: #ffd730ff;

        img {
            opacity: 0.6;
            transform: scale(1.05);
            transition: transform 3s ease-out;
        }

        h2 {
            opacity: 1;
        }
    }
`;

export const ModuleImageContainer = styled.div`
    height: 600px;
    overflow: hidden;
`;

export const ModuleImage = styled.img`
    height: 100%;
    width: auto;
    background-color: #ffd730ff;
`;

export const ModuleTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
`;

export const ModuleTitle = styled.h2`
    font-size: 120px;
    color: white;
    opacity: 0.9;
`;