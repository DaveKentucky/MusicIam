import styled from 'styled-components';


export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
`;
LoaderContainer.displayName = 'Loader';

export const LoaderText = styled.h4`
    font-size: 20px;
    font-weight: 500;
    margin-top: 50px;
`;
LoaderText.displayName = 'LoaderText';