import React from 'react';
import Connect from './components/Connect'
// import User from './components/User';

export default class App extends React.Component {
  state = {
    mudar: "page"
  }

  mudarPage = () =>{
    
  }
  render () {
  
   return (
      <div>
        <Connect/>
      </div>
    )}
  }
