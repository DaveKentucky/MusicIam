// libraries
import React, { useState, useEffect } from 'react';
// styles
import {
    SearchboxContainer,
    SearchboxHeader,
    SearchboxTextField
} from './searchbox.styles';


const Searchbox = ({ handleChange, onKeyPress, title, placeholders, imageUrl }) => {
    const [placeholder, setPlaceholder] = useState("");

    useEffect(() => {
        setPlaceholder(placeholders[Math.floor(Math.random() * placeholders.length)]);
    }, [placeholders]);

    return (
            <SearchboxContainer imageUrl={imageUrl}>
                <SearchboxHeader>{ title }</SearchboxHeader>
                <SearchboxTextField
                    onChange={ handleChange }
                    placeholder={ placeholder }
                    onKeyPress={ onKeyPress }
                />
            </SearchboxContainer>
    );
};

export default Searchbox;