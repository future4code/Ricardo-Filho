import React from 'react';
import {
  BtnEnviar,
  FormChat,
  InputMensagem,
  InputUsuario,
  ContainerChat,
  BalaoMensage,
  ContainerMensagem,
  Texto,
} from './ElementosDoChat';

class Chat extends React.Component {
  state = {
    mensagens: [
      {
        id: '',
        nome: '',
        mensagem: '',
      },
    ],

    valorInputNome: '',
    valorInputMensagem: '',
  };

  sendMessage = (m) => {
    m.preventDefault();
    const novaMensagem = {
      id: Date.now(),
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    };

    const novaListaMensagens = [novaMensagem, ...this.state.mensagens];

    this.setState({
      mensagens: novaListaMensagens,
      valorInputNome: '',
      valorInputMensagem: '',
    });
  };

  removeMessage = (mensagemId) => {
    if (window.confirm('Deseja deletar essa mensagem?')) {
      const novaListaMensagens = this.state.mensagens.filter((mensagem) => {
        return mensagemId !== mensagem.id;
      });
      this.setState({ mensagens: novaListaMensagens });
    }
  };

  onChangeNome = (m) => {
    this.setState({ valorInputNome: m.target.value });
  };

  onChangeMensagem = (m) => {
    this.setState({ valorInputMensagem: m.target.value });
  };

  render() {
    const componenteMensagens = this.state.mensagens.map((mensagem) => {
      if (mensagem.id && mensagem.nome.toLocaleLowerCase() === 'eu') {
        return (
          <ContainerMensagem
            style={{ alignSelf: 'flex-end' }}
            key={mensagem.id}
            onDoubleClick={() => this.removeMessage(mensagem.id)}
          >
            <Texto>{mensagem.nome}</Texto>
            <Texto>{mensagem.mensagem}</Texto>
          </ContainerMensagem>
        );
      } else if (mensagem.id) {
        return (
          <ContainerMensagem
            style={{ backgroundColor: '#363636' }}
            key={mensagem.id}
            onDoubleClick={() => this.removeMessage(mensagem.id)}
          >
            <Texto>{mensagem.nome}</Texto>
            <Texto>{mensagem.mensagem}</Texto>
          </ContainerMensagem>
        );
      }
    });

    return (
      <ContainerChat>
        <BalaoMensage>{componenteMensagens} </BalaoMensage>
        <FormChat onSubmit={this.sendMessage}>
          <InputUsuario
            value={this.state.valorInputNome}
            onChange={this.onChangeNome}
            placeholder="Usuário"
          />
          <InputMensagem
            value={this.state.valorInputMensagem}
            onChange={this.onChangeMensagem}
            placeholder="Mensagem"
          />
          <BtnEnviar type="submit">Enviar</BtnEnviar>
        </FormChat>
      </ContainerChat>
    );
  }
}

export default Chat;
