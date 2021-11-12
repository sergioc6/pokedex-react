import React, { useEffect, useState } from "react";
import { getPokemons } from "./../services/pokemonService";
import { v4 as uuidv4 } from 'uuid';

const PokemonsList = () => {


    const [pokemons, setPokemons] = useState()
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        async function fetchData() {
            const result = await getPokemons(page)
            setPokemons(result.data.results)
        }
        fetchData()
    }, [])


    return (
        <>
            {   pokemons ?
                pokemons.map(pokemon =>
                    <li key={uuidv4()}>{pokemon.name}</li>)
                : 'Cargando...'
            }
        </>
    )
}

export default PokemonsList;