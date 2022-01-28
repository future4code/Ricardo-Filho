import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import img from '../images/fundo.jpg'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 2.7fr 0.1fr;
  gap: 0px 0px;
  position: absolute;
  background-color: #fffff0;
  background-image: url(${img});
  width: 100%;
  height: 99.99%;
  background-size: cover;
  font-size: 6vh;
  font-family: 'Roboto';
  color: #fdfdfd;
  text-align: center;
  justify-items: center;
  overflow: auto;
`
const Header = styled.div`
  display: flex;
  width: 99.99%;
  font-size: 9vh;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  .textHeader {
    margin-top: 2px;
    color: #fffff0;
    font-size: 0.4em;
    font-family: 'Roboto';
  }
`
const BorderButton = styled.button`
  background: none;
  width: 4vw;
  height: 4vw;
  border: 1px solid;
  border-radius: 50%;
  margin: 5px;
  border-color: rgba(255, 255, 255, 0.5);
  align-items: center;
  text-align: center;
  cursor: pointer;
`
const ImgsButtons = styled.img`
  width: 50%;
  height: 50%;
`
const Main = styled.div`
  display: grid;
  width: 85vw;
  height: 60vh;
  justify-items: center;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  overflow: auto;
  grid-template-areas:
    '. . .'
    '. . .';

  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-button {
    width: 1px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 1 5px grey;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(244, 164, 96, 0.5);
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(210,105,30, 0.5);
  }
`
const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  font-size: 0.3em;
  background: rgba(255, 255, 255, 0.4);
  width: 25vw;
  height: 25vh;
  border: 1px solid;
  border-radius: 10px;
  text-align: left;
  overflow: auto;

  > p {
    font-family: 'Roboto';
    color: black;
  }
`
const LogoHeader = styled.img`
  width: 5vw;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: none;
`
const Button = styled.div`
  cursor: pointer;

  .middle {
    position: absolute;
    width: 10vw;
    height: 2vh;
    top: 0%;
    transform: translate(0%, -50%);
    border-radius: 20px;
  }
  .btn {
    position: relative;
    display: block;
    color: white;
    font-size: 14px;
    font-family: 'Roboto';
    text-decoration: none;
    margin: 30px 0;
    border: 2px solid #8b4513;
    padding: 14px 20px;
    text-transform: uppercase;
    overflow: hidden;
    transition: 1s all ease;
  }

  .btn::before {
    background: #6495ed;
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
const Footer = styled.div`
  margin-bottom: 0px;
  background: rgba(0, 0, 0, 0.5);
  height: 99.99%;
  width: 99.99%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;

  .textFooter {
    margin-top: 1px;
    color: #fffff0;
    font-size: 0.3em;
    font-family: 'Roboto';
  }
`
export default function Admin() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-ribeiro/trips'
      )
      .then(({ data }) => {
        setList(data.trips)
      })
      .catch(err => {
        alert('Se fudeu')
      })
  }, [])

  const history = useHistory()
  const goToHome = () => {
    history.push('/Home')
  }
  const goToCreate = () => {
    history.push('/CreateTrip')
  }

  const listMap = list.map(trips => {
    return (
      <ListStyled key={trips.id}>
        <p>
          <strong>Nome: </strong>
          {trips.name}
        </p>
        <p>
          <strong>Descrição: </strong>
          {trips.description}
        </p>
        <p>
          <strong>Planeta: </strong>
          {trips.planet}
        </p>
        <p>
          <strong>Duração: </strong>
          {trips.durationInDays}
        </p>
        <p>
          <strong>Data: </strong>
          {trips.date}
        </p>
      </ListStyled>
    )
  })

  return (
    <Container>
      <Header>
        <LogoHeader
          src="images/logospacelabex.png"
          alt="logo"
          aria-label="Logo"
        />
        <div className="textHeader">
          Te levando a lugares onde só os Deuses estiveram
        </div>

        <Buttons>
          <BorderButton>
            <a
              href="https://www.linkedin.com/in/ricardo-rickhardwares/"
              target="_blank"
            >
              <ImgsButtons
                src="images/linkedin.png"
                alt="linkedin"
                aria-label="linkdin"
              />
            </a>
          </BorderButton>
          <BorderButton>
            <a href="https://github.com/RickHardBR/RickHardBR" target="_blank">
              <ImgsButtons
                src="images/github.png"
                alt="github"
                aria-label="github"
              />
            </a>
          </BorderButton>
          <BorderButton>
            <a href="https://www.facebook.com/RickHardL" target="_blank">
              <ImgsButtons
                src="images/facebook.png"
                alt="facebook"
                aria-label="facebook"
              />
            </a>
          </BorderButton>
        </Buttons>
      </Header>
      <h4>Painel Administrativo</h4>
      <Main>
        {listMap}
      </Main>
      <Buttons>
        <Button onClick={goToHome}>
          <div className="middle btn btn1">Voltar</div>
        </Button>
        <Button onClick={goToCreate}>
          <div className="middle btn btn1">Criar</div>
        </Button>
        <Button>
          <div className="middle btn btn1">Logout</div>
        </Button>
      </Buttons>
      <Footer>
        <div className="textFooter">
          <div>SpaceLabex - Travels</div>
          <div>Todos os direitos reservados</div>
          <div>Copyright © 2022 SpaceToday Company.</div>
        </div>
        <div className="textFooter">
          <div>Alcântara - MA, 65250-000 * Maranhão * Brasil</div>
          <div>Missão: Base de lançamentos de foguetes</div>
          <div>Lema: Janela Brasileira para o Espaço</div>
        </div>
        <div className="textFooter">
          <div>Contato</div>
          <div>(98) 3311-9000</div>
          <div>spacelabex@travels.com.br</div>
        </div>
      </Footer>
    </Container>
  )
}
