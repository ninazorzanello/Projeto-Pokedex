import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../Components/Home/Home";
import DetalhesDoPokemon from "../Components/DetalheDoPokemon/DetalheDoPokemon";
import Pokedex from "../Components/Pokedex/Pokedex";
import Erro from "../Components/Erro/Erro";

const Rotas= ({mudaTextoHeader}) => {
    return(
        <div>
            
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pokedex" element={<Pokedex/>}/>
                <Route path="/detalhes_do_pokemon/:id" element={<DetalhesDoPokemon/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
            
        </div>
    )
};

export default Rotas;