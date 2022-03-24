import React from "react";
import {Li} from "./styled";
import { useNavigate } from "react-router-dom";

const Header= (props) => {
    const navigate=useNavigate();

    const navegar= path => {
        navigate(path);
    }
    
    return(
        <div>
            <h1>{props.titulo}</h1>
            <ul>
                {props.button.map((texto, index) => {
                    return (<Li onClick={() => navegar(props.path[index])} key={index}>{texto}</Li>)
                })}
            </ul>
        </div>
    )
};


export default Header;