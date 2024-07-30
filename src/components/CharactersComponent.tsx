import React, {useEffect, useState} from 'react';
import {characterService} from "../services/api.service";
import {ICharacter} from "../models/ICharacter";
import {useSearchParams} from "react-router-dom";
import CharacterComponent from "./CharacterComponent";

const CharactersComponent = () => {

    const [query,setQuery] = useSearchParams({page: '1'})

    const [characters, setCharacter] = useState<ICharacter[]>([])

    useEffect(() => {
        const currentPage = query.get('page') || '1'
        characterService.getAll(currentPage).then(value => {
            setCharacter(value.data.results)
        })
    }, [query]);

    return (
        <div>
            {
                characters.map(character => <CharacterComponent key={character.id} character={character}/>)
            }
        </div>
    );
};

export default CharactersComponent;