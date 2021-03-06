import styled from 'styled-components'


export const Div =styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;

`


export const Nav= styled.div`
  margin: 0;
  padding: 0;
  background:  #FFCC03; 
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  height:70px;
  width: 100%;
 
    .icon{
    font-size:1.5em;
    color: #386ABB;
  }
`

export const Button =styled.button`
  position: relative;
  margin-right: 10px;
  display: flex;
  align-items: center;
  border:none;
  border-radius: 10em;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-size:0,8em;
  text-align: center;
  color: black;
  cursor: pointer;
  background-color:  #FFCC03;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 #386ABB;
  -webkit-transition: all 150ms ease-in-out;
  transition: transform 0.9s;
    :hover {
      box-shadow: 0 0 4px 0 #386ABB inset, 0 0 4px 2px #386ABB;
    }
    :active{
      box-shadow: 0 0 4px 0 #386ABB inset, 0 0 4px 2px #386ABB;
      background-color: white;
      color: white;
    }
`

export const Img= styled.img`
 width: 10%;
 margin-right: 70%;
`

