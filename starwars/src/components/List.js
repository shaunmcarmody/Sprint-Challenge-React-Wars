import React from 'react';
import './StarWars.css';

const List = (props) => {
    return (
        <ul>
            {
                Object.values(props).map(item => (
                    item !== "n/a" ? <li key={item}>{item.slice(0, 1).toUpperCase() + item.slice(1)}</li> : null)
                )
            }
        </ul>
    )
}

export default List;