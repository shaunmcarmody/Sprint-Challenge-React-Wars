import React from 'react';
import List from './List';
import './StarWars.css';

const Characters = (props) => {
    return (
        <div className='character'>
            <h1>
                {props.character.name}
            </h1>
            <List
                skinColor={props.character.skin_color}
                gender={props.character.gender}
                hairColor={props.character.hair_color}
            />
        </div>
    )
}

export default Characters;