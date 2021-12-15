import axios from 'axios';
import React from 'react';

export default class App extends React.Component {
    state = {
      nomeInput:'',
      emailInput: ''
    }
  
  mudaNome = (e) => {
    this.setState({nomeInput: e.target.value });
  };
  
  mudaEmail = (e) => {
    this.setState({emailInput: e.target.value });
  };
  
  criarUsuario = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
  
    const body = {
  
        name: this.state.nomeInput,
        email: this.state.emailInput
    };
    const headers = {
      headers: {
        Authorization: "ricardo-ribeiro-joy"
      }
    }
  
    axios
    .post(URL, body, headers)
    .then((res) => {
         this.pegaUsuario();
    })
    .catch((err) => {
    });
  
  }
  
  
    render () {     
  
      return (
        <div>
          
        <div>
          <input 
          placeholder={'Digite o nome do usuário'}
          type = 'Text'
          size = '30'
          value = {this.state.nomeInput}
          onChange = {this.mudaNome}
          />
        </div>
  
          <div>
          <input
          placeholder = {'Digite um e-mail válido'}
          type = 'email'
          size = '30'
          value = {this.state.emailInput}
          onChange = {this.mudaEmail}
          />
          </div>
         <button onClick={this.criarUsuario}>Enviar</button>
        </div>
      );
    }
  
}