import React, {useState, useEffect} from "react";
import {CardContainer, Card, ButtonContainer} from "./styled";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Home= () => {
    const [pokemon, setPokemon]= useState([]);  
    useEffect(() => pegarPokemons(), []);
    const navigate= useNavigate();

    const pegarPokemons= () => {
        const arrayDePokemons=[];
        const pokemons= number => `https://pokeapi.co/api/v2/pokemon/${number}`

        for(let i= 1; i <= 20; i++){

            arrayDePokemons.push(fetch(pokemons(i)).then(response => response.json()))
        }

        Promise.all(arrayDePokemons)
            .then(obj => setPokemon(obj))
            .catch(error => console.log(error.response))
    };


    const detalhes= nome => {
        navigate(`/detalhes_do_pokemon/${nome}`)
    }

    const cardsDosPokemons= pokemon.length === 0? "Carregando": pokemon.map((obj, index) => {
    
        return (
            <Card key={index}> 
                
                <img src={obj.sprites.front_default}/>
                
                <ButtonContainer>

                    <button>Adicionar</button>
                    <button onClick={() => detalhes(obj.name)}>Detalhes</button>

                </ButtonContainer>
            </Card>
        )
    });

    return(
        <>
            <Header titulo="Lista de Pokémons" button={["Ir para Pokedex"]} path={["/pokedex"]}/>
            <CardContainer>
                {cardsDosPokemons}
            </CardContainer>
        </>
    )
};

export default Home;