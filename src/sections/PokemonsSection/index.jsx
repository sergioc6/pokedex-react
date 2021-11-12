import React, { useEffect, useState } from "react";
import './PokemonsSection.css'
import { getPokemons } from "../../services/pokemonService";
import { v4 as uuidv4 } from 'uuid';
import PokemonDetail from "../../components/PokemonDetail";

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
        <div className="grid-pokemons">
            {   pokemons ?
                pokemons.map(pokemon =>
                    <PokemonDetail key={uuidv4()}></PokemonDetail>)                    
                : 'Cargando...'
            }
        </div>
    )
}

export default PokemonsList;