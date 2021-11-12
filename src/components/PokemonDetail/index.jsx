import React from "react";
import PropTypes from 'prop-types';

const PokemonDetail = ({id, name, type, sprite}) => {
    return (
        <h1>PokemonDetail</h1>
    )
}

PokemonDetail.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default PokemonDetail;