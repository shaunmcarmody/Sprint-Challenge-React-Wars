import React from 'react';

const Button = (props) => {
    return (
        <button onClick={() => props.getCharacters(props.browse)} value={props.browse} disabled={!props.browse ? true: false}>Button</button>
    )
}

export default Button;