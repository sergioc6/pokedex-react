import axios from "axios";

export const getLocations = async () => {

    let result = await axios.get(`https://pokeapi.co/api/v2/location`);
    return result;
}