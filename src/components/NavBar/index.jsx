import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom"
import { POKEMONS, SAGAS, UBICACIONES } from "./../../utils/routes";

const NavBar = () => {
    return (
        <nav>
            <Link to={POKEMONS}>Pokemons</Link>
            <Link to={UBICACIONES}>Ubicaciones</Link>
            <Link to={SAGAS}>Sagas</Link>
        </nav>
    )
}

export default NavBar