import React from 'react'
import './App.css'
import axios from 'axios';
import CriarPlayList from './components/CriarPlayList'
import MostrarPlayList from './components/MostrarPlayList'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    font-family: 'Roboto';
    color: white;
}
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin: 50px;
  background-color: black;
  color: gray;
  justify-items: stretch;
`

const Header = styled.div`
  grid-column: span 3;
  padding: 30px;
  text-align: center;
  font-size: 3em;
  font-family: 'Roboto';
  background-color: #1c1c1c;
  color: white;
`

const Input = styled.div`
  padding: 10px;
  background-color: #1c1c1c;
  color: white;
`
const Meio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: #1c1c1c;
  color: white;
`
const Button = styled.button`
  background: #4F4F4F;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #A9A9A9;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
      background: black;
      color: white;
 
 &:active {
      background: white;
      color: black;
    }
    &:focus {
      background: white
      color: black;
    }
  }
`
export default class App extends React.Component {
  state = {
    mostraLista: false
  }
  componentDidMount() {
    this.pegaPlaylists()
}
  mudaCondicionalDeLista = () => {
    this.state.mostraLista
      ? this.setState({ mostraLista: false })
      : this.setState({ mostraLista: true })
  }

  pegaPlaylists = () =>{
    let URL= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    let autorizacao = {
        headers: {
            authorization: "ricardo-ribeiro-joy"
        }
    }
    axios.get(URL, autorizacao)
    .then((response)=>{ this.setState({playlists: response.data.result.list})})
    .catch((error)=>{console.log(error)})
  }
    render() {
    let mostraLista = <h1>Página de erro</h1>
    if (this.state.mostraLista) {
      mostraLista = <MostrarPlayList />
    } else {
      mostraLista = ''
    }

    return (
      <div>
        <GlobalStyles />
        <Header> Labefy - Music and Code´s</Header>
        <Container>
          <Input>
            <CriarPlayList />
            <Button onClick={this.mudaCondicionalDeLista}>
              Mostrar/Esconder Playlists
            </Button>
          </Input>
          <Meio>{mostraLista}</Meio>
        </Container>
      </div>
    )
  }
}
