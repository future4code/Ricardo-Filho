import React from 'react';
import axios from 'axios'

export default class App extends React.Component{

  state = {
    nameMusic: "",
    nameArtist: "",
    urlMusic: "",
    listMusic:[]
  }

changeMusicName = (event) => {
  this.setState({nameMusic: event.target.value})
}
changeArtisName = (event) => {
  this.setState({nameArtist: event.target.value})
}
changeUrl = (event) => {
  this.setState({urlMusic: event.target.value})
}
AddMusic = (id) =>{
  let url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
  
  let body = {
    name: this.state.nameMusic,
    artist: this.state.nameArtist,
    url: this.state.urlMusic
  }

  let autorizacao = {
  headers: {
      authorization: "ricardo-ribeiro-joy"
  }
}
axios.post(url, body, autorizacao).then((response) => {
  this.setState({nameArtist:"", nameMusic:"", urlMusic:""})
  alert("Adicionado com sucesso na sua PlayList")
})
.catch((error) =>{alert(error)})
}
  render(){
    
      return (
             <div>
             <input placeholder="Nome do Artista" value={this.state.nameArtist} onChange={this.changeArtisName} />
             <input placeholder="Nome da Música" value={this.state.nameMusic} onChange={this.changeMusicName} />
             <input placeholder="Link da Música" value={this.state.urlMusic} onChange={this.changeUrl} />
             <button onClick={this.AddMusic}>Add</button>
             </div>           
           
       )}
      }