import React from 'react'
import { HeaderContainer } from './style';
import logo from '../../Assets/logo.svg'
import { useNavigate } from "react-router-dom";
import { goToHome } from '../../Routes/Coordinator'

function Header() {
  const history = useNavigate ()

  return (
    <HeaderContainer>
      <img src={logo} alt='TMDB'
      onClick={() => goToHome(history)}/>
    </HeaderContainer>
  );
}

export default Header;