// libraries
import React, { useState, useEffect } from 'react';
// styles
import {
    SearchboxContainer,
    SearchboxHeader,
    SearchboxTextField
} from './searchbox.styles';


const Searchbox = ({ handleChange, title, placeholders }) => {
    const [placeholder, setPlaceholder] = useState("");
    useEffect(() => {
        setPlaceholder(placeholders[Math.floor(Math.random()*placeholders.length)]);
    }, []);

    return (
            <SearchboxContainer>
                <SearchboxHeader>{ title }</SearchboxHeader>
                <SearchboxTextField
                    onChange={ handleChange }
                    placeholder={ placeholder }
                />
            </SearchboxContainer>
    );
};

export default Searchbox;