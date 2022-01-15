import styled from 'styled-components';
import { variables } from '../../scss-variables';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`;
Container.displayName = 'TrackContainer';

export const Header = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 4%;
`;
Header.displayName = 'TrackHeader';

export const Image = styled.div`
    height: 50vh;
    width: 50vh;
    background-image: url(${ ({ imageUrl }) => `${ imageUrl }` });
    background-size: cover;
`;
Image.displayName = 'TrackIamge';

export const TitleAndAuthorContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 0 3%;
`;
TitleAndAuthorContainer.displayName = 'TitleAndAuthor';

export const Title = styled.h1`
    width: 100%;
    text-align: left;
    font-size: 3.5rem;
`;
Title.displayName = 'Title';

export const Author = styled.h2`
    width: 100%;
    text-align: left;
    font-size: 2.5rem;
`;
Author.displayName = 'Author';

export const Lyrics = styled.div`
    width: 50%;
    padding-left: 20px;
    margin-left: 10vh;
    margin-bottom: 5vh;
    border-left: 5px solid;
    border-color: ${variables.colors.musiciamPurple};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;
Lyrics.displayName = 'LyricsContainer'

export const LyricsLine = styled.p`
    margin: 0;
    font-size: 1.2rem;
`;
LyricsLine.displayName = 'Line';

export const LyricsSpecial = styled(LyricsLine)`
    margin-top: 10px;
    font-style: italic;
`;
LyricsSpecial.displayName = 'LyricsSpecial';