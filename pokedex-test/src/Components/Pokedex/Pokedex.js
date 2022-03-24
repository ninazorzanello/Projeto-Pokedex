import React from "react";
import Header from "../Header/Header";

const Pokedex= props => {
    
    return(<div>
        <Header titulo="Pokédex" button={["Voltar para lista de pokémons"]} path={["/"]}/>
     
    </div>)
};

export default Pokedex;