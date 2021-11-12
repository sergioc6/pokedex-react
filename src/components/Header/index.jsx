import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import { HOME } from "./../../utils/routes";

const Header = () => {

    return (
    <header>
        <Link to={HOME}>Pokedex App</Link>
    </header>)
}

export default Header;