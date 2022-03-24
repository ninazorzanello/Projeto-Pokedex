import React from "react";
import {Link} from "react-router-dom";
import { useNavigate} from "react-router-dom";
import {Div, Img, Nav,  Button, DivHeader} from './styled';
import {FaHome} from 'react-icons/fa';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const HeaderPokedex = () => {

  const routes = useNavigate()

  const PageDaHome = () => {
    routes("/")
  }
    return (
     
      <Nav>
        <Img src="https://i.postimg.cc/KY9P2h0V/Logo-Est-tica.png"/>
        <Div>
          <div><Button onClick={() => PageDaHome()}><FaHome className="icon"/> Home</Button></div>
          <div><Button onClick={() => PageDaHome()}><BsFillArrowLeftCircleFill className="icon"/> Voltar</Button></div>
        </Div>       
      </Nav>
     
    )
}
export default HeaderPokedex