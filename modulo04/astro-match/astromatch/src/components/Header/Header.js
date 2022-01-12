import styled from 'styled-components'
import ChamaLista from '../ChamaLista/ChamaLista.js'
import axios from 'axios';
import {useState, useEffect} from 'react';

const Container = styled.div`
  display: flex;
  width: 350px;
  align-items: center;
  justify-content: space-between;
  color: red;
  font-family: 'Roboto', sans-serif;
  
  .white-with-blue-shadow {
    text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
    color: white;
    font: 1.5em Roboto;
  }

  button {
    width: 70px;
    height: 70px;
    border: 0.5px;
    background-color: transparent;
    cursor: pointer;
  }

  .threed1:hover {
    -webkit-transform: translateX(-5px);
    transform: translateX(-9px);
  }
  .threed2:hover {
    -webkit-transform: translateX(-5px);
    transform: translateX(9px);
  }
`

const Tinder = styled.div`
  img {
    height: 30px;
  }
`
export default function Header(props) {
  const [mudaTela, setMudaTela] = useState(true);

  const ListaChamada = ()=>{
      setMudaTela(!mudaTela)
  }
 
  return (
    <Tinder>
      <Container>
        
      </Container>
    </Tinder>
  )
}
