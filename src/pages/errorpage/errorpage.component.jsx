// libraries
import React from 'react';
// styles
import {
    ErrorpageContainer,
    ErrorCode,
    ErrorMessage,
    ErrorImageContainer
} from './errorpage.styles';


const Errorpage = () => {
    return (
        <ErrorpageContainer>
            <ErrorImageContainer>

            </ErrorImageContainer>
            <ErrorCode>
                    404
                </ErrorCode>
                <ErrorMessage>
                    Page not found
                </ErrorMessage>
        </ErrorpageContainer>
    );
};

export default Errorpage;