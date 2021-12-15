import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import AddMusic from './AddMusic'

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 500px 200px;
  align-items: center;
  `
const Titulo = styled.h2`
  display: grid;
  grid-template-columns: 100px;
  font-size: 20px;
`

  const PdeP = styled.p`
  display: grid;
  grid-template-columns: 800px;
  font-size: 20px;
`
const CardButton = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: 40px;
align-items: center;
`
const Box1 = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
`
const Box2 = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
    grid-row-end: 5;
`
const Box3 = styled.div`
    grid-column-start: 3;
    grid-row-start: 2;
    grid-row-end: 5;
`

const Button = styled.button`
  background: #4F4F4F;
  width: 100px;
  font-size: 0.7em;
  margin: 1em;
  color: white;
  padding: 0.25em 1em;
  border: 2px solid #A9A9A9;
  border-radius: 5px;
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
        playlists: [],
        idPlaylist: ''
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () =>{
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

    deletePlay = (id) => {

        axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers:{
              Authorization: "ricardo-ribeiro-joy"
            }
          }
        )
        .then(() => {
          alert("PlayList apagada com sucesso!");
          this.getPlaylists();
        })
        .catch((err) => {
          console.log(err.response.data)
        })
      }

    render() {
        
          let playListsMap = this.state.playlists.map((playlist)=>{
            return<Container>
            <CardButton>
                <Box1>Play List: {playlist.name}</Box1>
                <Box2><Button>Detalhes da Playlist</Button></Box2>
                <Box3><Button>Adicionar Música</Button></Box3>
                
            </CardButton>
              <div>
                <Button onClick={() => this.deletePlay(playlist.id)}>X</Button>
                
              </div>
              </Container>
        })

        return(
            <div key={playListsMap.id}>
                <Titulo> Quantidade de playlists: {playListsMap.length} </Titulo>

                <PdeP>
                {playListsMap} 
                <AddMusic />
                </PdeP>
            </div>
        )
    }

}