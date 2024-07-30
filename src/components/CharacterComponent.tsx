import React, {FC} from 'react';
import {ICharacter} from "../models/ICharacter";

interface IProps {
    character: ICharacter
}


const CharacterComponent:FC<IProps> = ({character}) => {
    return (
        <div>
            <h3>{character.id}: {character.name}</h3>
            <p>{character.species}</p>
        </div>
    );
};

export default CharacterComponent;