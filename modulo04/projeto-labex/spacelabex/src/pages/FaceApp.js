import React from 'react'
import styled from 'styled-components'
import img from '../images/fundo.jpg'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
  font-size: 5vh;
  font-family: 'Roboto';
  color: #fdfdfd;
  text-align: center;
  
`
const Logo = styled.img`
  width: 25vw;
`
const Background = styled.div`
  position: relative;
  background-color: #fffff0;
  background-image: url(${img});
  width: 100vw;
  height: 100vh;
  background-size: cover;
`

const Button = styled.div`
  cursor: pointer;

  .middle {
    position: absolute;
    width: 150px;
    /* height: 2vh; */
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
  }
  .btn {
    position: relative;
    display: block;
    color: white;
    font-size: 0.6em;
    font-family: 'Roboto';
    text-decoration: none;
    margin: 30px 0;
    border: 2px solid #ff7675;
    padding: 5px 10px;
    text-transform: uppercase;
    overflow: hidden;
    transition: 1s all ease;
  }
  .btn::before {
    background: #ff7675;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
  }

  .btn1::before {
    width: 0%;
    height: 100%;
  }

  .btn1:hover::before {
    width: 100%;
  }
`

export default function FaceApp(props) {
  const history = useHistory()
  const goToHome = () => {
    history.push('/home')
  }

  return (
    <Container>
      <Background>
        <header>
          <Logo src="images/logospacelabex.png" alt="logo" />
          <p>SpaceLabex - Travels</p>
          <p>Te levando a lugares onde só os Deuses estiveram.</p>
          <Button onClick={goToHome}>
            <div className="middle btn btn1">Decolar</div>
          </Button>
        </header>
      </Background>
    </Container>
  )
}
