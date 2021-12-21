import styled from 'styled-components';


export const TrackHeader = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4%;
`;
TrackHeader.displayName = 'TrackHeader';

export const TrackImage = styled.div`
    height: 50vh;
    width: 50vh;
    background-image: url(${ ({ imageUrl }) => `${ imageUrl }` });
    background-size: cover;
`;
TrackImage.displayName = 'TrackIamge';

export const TrackTitleAndAuthor = styled.div`
    width: 60vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 0 3%;
`;
TrackTitleAndAuthor.displayName = 'TitleAndAuthor';

export const TrackTitle = styled.h1`
    width: 100%;
    text-align: left;
    font-size: 3.5rem;
`;
TrackTitle.displayName = 'Title';

export const TrackAuthor = styled.h2`
    width: 100%;
    text-align: left;
    font-size: 2.5rem;
`;
TrackAuthor.displayName = 'Author';