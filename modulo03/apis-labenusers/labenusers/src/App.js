import React from 'react';
import Adduser from './components/Adduser';
import User from './components/User';


export default class App extends React.Component {
  state = {
    mudar: "user",
    user:{}
  }

  changePage = () =>{
    if (this.state.mudar ==="user") {
      this.setState({mudar: "connect"});
    } else if (this.state.mudar === "connect") {
      this.setState({mudar: "user" });
    }
    }
  

  render () {

    const mudarPagina = this.state.mudar === "user" ? <Adduser/> : <User/>

   return (
     <div>
      <div>
       <button onClick={this.changePage}>Trocar de Tela</button>
      </div>
      <div>
         {mudarPagina}
       </div>
      </div>
    );
  }
}