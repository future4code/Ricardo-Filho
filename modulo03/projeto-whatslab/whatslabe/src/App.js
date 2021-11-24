import React from 'react';
import styled from 'styled-components';
import Chat from './components/CampoMensagens';
import TopoEstilo from './components/BarraSuperior'
import './App.css';
import { Helmet } from 'react-helmet';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
   background-color: #f0f0f0;
`;

class App extends React.Component {
  render() {
    return (
    <div>
      <Helmet>
        <title> WhatsZap - Labenu - RickHard</title>
       </Helmet>
          <div className="topo">
            <TopoEstilo />
          </div>
      <MainContainer>
        <Chat />
      </MainContainer>
      </div>
    );
  }
}

export default App;
