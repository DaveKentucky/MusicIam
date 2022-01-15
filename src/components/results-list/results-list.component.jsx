import React from 'react';

import ResultsListItem from './results-list-item/results-list-item.component';

import { ResultsListContainer } from './results-list.styles';


const ResultsList = ({ results }) => {
    return (
        <ResultsListContainer>
            {results.map((result) => (
                <ResultsListItem
                    key={ result.songId }
                    { ...result }
                />
            ))}
        </ResultsListContainer>

    )
};

export default ResultsList;