import axios from 'axios';
import React from 'react';

 export default class App extends React.Component {
    state = {
      users: [],
      nomeInput:'',
      emailInput: ''
    }
    componentDidMount() {
    this.chamaUsuario ()
        }
  
        chamaUsuario = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    { 
      headers:{
        Authorization: "ricardo-ribeiro-joy"
      }
  
    })
    .then((res) => {
      this.setState({ users: res.data })
      // console.log(res.data)
    })
    .catch((err) => {
      // console.log(err.response.data)
    })
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
      // console.log(err.response.data);
    });
  
  }
  
    render () {
  
      const lista = this.state.users.map((user) =>{
        return<p key = {user.id}>{user.name}</p>
  
      })
  
      return (
        <div>
          <button>Trocar de Tela</button>
        <div>
          <input 
          placeholder={'Digite o nome do usuário'}
          type = 'Text'
          size = '25'
          value = {this.state.nomeInput}
          onChange = {this.mudaNome}
          />
        </div>
  
          <div>
          <input
          placeholder = {'Digite o seu e-mail'}
          type = 'email'
          size = '30'
          value = {this.state.emailInput}
          onChange = {this.mudaEmail}
          />
          </div>
         <button onClick={this.criarUsuario}>Enviar</button>
  
        {lista}
        </div>
      );
    }
  
}