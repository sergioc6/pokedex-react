import axios from "axios";

export const getPokemons = async (page, pageSize = 20) => {

    const offset = (page*pageSize)-pageSize

    let result = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pageSize}`);
    return result;
}