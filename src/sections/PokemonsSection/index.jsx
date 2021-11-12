import React, { useEffect, useState } from "react";
import './PokemonsSection.css'
import { getPokemons } from "../../services/pokemonService";
import PokemonDetail from "../../components/PokemonDetail";
import { pokemonDetailTransform } from "../../utils/transforms/pokemonTransform";

const PokemonsList = () => {


    const [pokemons, setPokemons] = useState()
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        async function fetchData() {
            const results = await getPokemons(page)
            const resultsTransformed = []
            results.data.results.forEach(result => {
                resultsTransformed.push(pokemonDetailTransform(result))
            })
            setPokemons(resultsTransformed)
        }
        fetchData()
    }, [])


    return (
        <div className="grid-pokemons">
            {   pokemons ?
                pokemons.map(({id, name, url, sprite }) =>
                    <PokemonDetail key={id} id={id} name={name} url={url}/>)                    
                : 'Cargando...'
            }
        </div>
    )
}

export default PokemonsList;