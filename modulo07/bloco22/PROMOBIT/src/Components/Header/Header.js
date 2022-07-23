import React from 'react'
import logo from '../../Assets/logo.svg'
import { HeaderContainer } from './style';
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../Routes/Coordinator';

export default function Header() {
  const history = useNavigate()
  return (
    <HeaderContainer>
      <header>
        <img
          src={logo}
          alt="Tmdb logo"
          onClick={() => goToHome(history)}
        />
      </header>
    </HeaderContainer>
  )
}