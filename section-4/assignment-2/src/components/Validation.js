import React from 'react'


const Validation = ({charLength}) => {
    return (<p> {charLength < 5 ? 'Text is too short' : null} </p>)
};

export default Validation