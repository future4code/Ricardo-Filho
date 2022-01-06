import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Titulo = styled.h3`
  font-size: 20px;
  text-align: center;
`
const Button = styled.button`
  background: #4F4F4F;
  font-size: 1em;
  color: white;
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
    };
  &:focus {
      background: white;
      color: black;
`;

export default class App extends React.Component {

  state = {
    textoInput: ""
  }

  mudaTextoInput = (event) => {
    this.setState({textoInput: event.target.value})
  }

  CriarPlaylist = () => {
    let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    let body = {
        "name": this.state.textoInput
    }
    let autorizacao = {
      headers: {
        Authorization: "ricardo-ribeiro-joy"
      }
    }

    axios.post(URL, body, autorizacao)
    .then((response) => {
      this.setState({textoInput:""})
      alert("Playlist Criada com sucesso!")
    })
    .catch((error) => {alert(error)})
  }
  render(){
  
    return (


     <Container>
        <Titulo>Criar Playlist</Titulo>
          
        <input placeholder="Nome da Playlist" value={this.state.textoInput} onChange={this.mudaTextoInput} />
        
        <Button onClick={this.CriarPlaylist}>Criar</Button>
        
      </Container>
      
  )}
}