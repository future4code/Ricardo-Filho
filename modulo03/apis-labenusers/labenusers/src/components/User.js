import axios from 'axios'
import React from 'react'
import DetailUser from './DetailUser'


const ricardoLogin = {
  headers: {
    Authorization: 'ricardo-ribeiro-joy'
  }
}

export default class App extends React.Component {
  state = {
    lista: [],
    currentPage: 'lista',
    userId: '',
    name: ''
  }

  componentDidMount() {
    this.chamaUsuario()
  }

  chamaUsuario = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        ricardoLogin
      )
      .then(res => {
        this.setState({ lista: res.data })
      })
      .catch(err => {})
  }

  temCerteza = userId => {
    if (window.confirm('Tem certeza que deseja excluír o usuário?')) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          ricardoLogin
        )
        .then(() => {
          alert('Usuário excluído com sucesso!')
          this.chamaUsuario()
        })
        .catch(e => {
          alert('ERRO AO APAGAR USUARIO')
        })
    }
  }

  changePage = userId => {
    if (this.state.currentPage === "usersList") {
      this.setState({ currentPage: "userDetail", userId: userId });
    } else {
      this.setState({ currentPage: "usersList", userId: "" });
    }
  };
  
  render() {
    return (
      <div>
        {this.state.currentPage === 'lista' ? (
          <div>
            <ul>
              {this.state.lista.length === 0 && <div>Carregando...</div>}
              {this.state.lista.map(user => {
                return (
                  <li>
                    <span onClick={() => this.changePage(user.id)}>
                      {user.name}
                    </span>
                    <button onClick={() => this.temCerteza(user.id)}>X</button>
                  </li>
                )
              })}
            </ul>
           <h4>Procurar usuário</h4>
            <input
              placeholder= 'Nome exato para busca'
              type= 'text'
              size= '30'
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <button onClick={this.handleSearchUser}>Salvar edição</button>
          </div>
        ) : (
          <DetailUser userId={this.state.userId} changePage={this.changePage} />
        )}
      </div>
    )
  }
}
