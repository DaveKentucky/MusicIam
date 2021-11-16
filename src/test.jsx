import React, { useState, useEffect } from 'react';


const TestComponent = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch('/authors')
        .then(res => res.json())
        .then(data => {
            setAuthors(data.authors);
        })
    }, []);

    return (
        <div className='authors'>
            <p>Authors:</p>
            {
                authors.map(author => (
                    <p key={ author.id }>
                        { author.name }
                    </p>
                ))
            }
        </div>
    );
};

export default TestComponent;