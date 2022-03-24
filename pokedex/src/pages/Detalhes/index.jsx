import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import GlobalStateContext from "../../Global/GlobalStateContext";
import {FotoPokemon, DivPokemon, PageHome, Div} from './styled'

const Detalhes = () => {

    const detalhesPokemon =useContext(GlobalStateContext)

    const [info, setInfo]= useState([])
    const [foto, setFoto] = useState()
    const [type, setType] = useState()
    const [type2, setType2] = useState()
    const [habilidade, setHabilidade] = useState()
    const [habilidade2, setHabilidade2] = useState()

    
    const {name}= useParams ();
   
    
    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) =>{
            console.log(response.data)
            setInfo(response.data)            
            setFoto(response.data.sprites.other.home.front_default)
            setType(response.data.types[0].type.name)
            setType2(response.data.types[1].type.name)
            setHabilidade(response.data.abilities[0].ability.name)
            setHabilidade2(response.data.abilities[1].ability.name)
        })
        .catch((error) => {
            console.log(error)
        })        
    }, []);

    console.log(info)

    

    return (
      <PageHome>
        <Header />
        <DivPokemon>
            <FotoPokemon src={foto} alt="" style={{width: '80%'}}/>
            <Div>
            <p><strong>Nome:</strong> {info.name}</p>
            <p><strong>Altura:</strong> {info.height} cm</p>
            <p><strong>Peso:</strong> {info.weight} g</p>
            <p><strong>Habilidades: </strong>{habilidade}, {habilidade2}</p>
            <p> <strong>Tipos: </strong>{type}, {type2}</p>
            </Div>
        </DivPokemon>
      
      </PageHome>
    )
}

export default Detalhes