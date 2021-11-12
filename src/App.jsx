import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { POKEMONS, UBICACIONES } from "./utils/routes"
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PokemonsList from "./sections/PokemonsList";
import LocationsSection from "./sections/LocationsSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path={POKEMONS} element={<PokemonsList/>}/>
          <Route path={UBICACIONES} element={<LocationsSection/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
);
}

export default App;
