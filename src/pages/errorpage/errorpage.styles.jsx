import styled from 'styled-components';


export const ErrorpageContainer = styled.div`
    text-align: center;
    height: 90vh;
    width: 100vw;
    margin: auto;
    background-color: white;
`;
ErrorpageContainer.displayName = 'ErrorPage';

export const ErrorImageContainer = styled.div`
    background-image: url(https://cdn.dribbble.com/users/26068/screenshots/14638411/media/5eb84509561a92d273b7715b02fea7ea.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    height: 50vh;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
ErrorImageContainer.displayName = 'ErrorImage';

export const ErrorCode = styled.h1`
    font-size: 160px;
    margin: 0;
`;
ErrorCode.displayName = 'ErrorCode';

export const ErrorMessage = styled.h2`
    font-size: 80px;
    margin: 0;
`;
ErrorMessage.displayName = 'ErrorMessage';