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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Comps = styled.div`
  display: flex;
  justify-content: center;
`
const Trip = styled.div`
  border: 1px solid;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  overflow-y: auto;
`
const TripClean = styled.div`
  width: 200px;
  height: 200px;
`
const TextContainer = styled.div`
  text-align: left;
  font-size: 20px;
`
const Sucess = styled.div`
  border: 1px solid;
  border-radius: 20px;
  width: 600px;
  height: 100px;
  margin-top: 50px;
  align-items: center;
`
const Aproved = styled.div`
  width: 200px;
  margin-top: 20px;
  margin-bottom: -40px;
`
const LogoHeader = styled.img`
  width: 5vw;
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  background-color: none;
  align-content: center;
  align-items: center;
`
const Button = styled.div`
  cursor: pointer;

  .middle {
    position: absolute;
    width: 100px;
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
    margin-top: 2px;
    color: #fffff0;
    font-size: 0.3em;
    font-family: 'Roboto';
  }
`
export default function TripDet() {
const [detail, setDetail] = useState([])
  
useEffect((id) => {
    axios
    .get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-ribeiro/trip/${id}`,{ headers: { Auth: localStorage.getItem('token') } })
    .then(({ trip }) => {
      setDetail(trip.id)
      console.log(trip)
    })
    .catch(error => {
    })
  },[])

 const history = useHistory()
  const goToAdmin = () => {
    history.push('/Admin')
  }

  const detailMap = detail.map(trip =>{
    return(
      <div key={trip.id}>
        <p>
          <strong>{trip.name}</strong>
        </p>
        <p>
          <strong>Nome:</strong>
          {trip.name}
        </p>
        <p>
          <strong>Planeta:</strong>
          {trip.planet}
        </p>
      </div>
    )
  })

  return (
    <Container>
      <Header>
        <LogoHeader src="images/logospacelabex.png" alt="logo" />
        <div className="textHeader">
          Te levando a lugares onde só os Deuses estiveram
        </div>
        <div className="textHeader">
          <Buttons>
            <BorderButton>
              <a
                href="https://www.linkedin.com/in/ricardo-rickhardwares/"
                target="_blank" rel="noreferrer"
              >
                <ImgsButtons
                  src="images/linkedin.png"
                  alt="linkedin"
                  aria-label="linkdin"
                />
              </a>
            </BorderButton>
            <BorderButton>
              <a
                href="https://github.com/RickHardBR/RickHardBR"
                target="_blank" rel="noreferrer"
              >
                <ImgsButtons
                  src="images/github.png"
                  alt="github"
                  aria-label="github"
                />
              </a>
            </BorderButton>
            <BorderButton>
              <a href="https://www.facebook.com/RickHardL" target="_blank" rel="noreferrer">
                <ImgsButtons
                  src="images/facebook.png"
                  alt="facebook"
                  aria-label="facebook" rel="noreferrer"
                />
              </a>
            </BorderButton>
          </Buttons>
        </div>
      </Header>
      <Main>
        <Comps>
          <Trip>
            <div>Viagens</div>
            <hr />
            <TextContainer>
              {detailMap}
            </TextContainer>
          </Trip>
          <TripClean></TripClean>
          <Trip>
            <div>Pendentes</div>
            <hr />
            <TextContainer>
              <div>Nome:</div>
              <div>profissão:</div>
              <div>Idade:</div>
              <div>País:</div>
              <div>Mensagem:</div>
            </TextContainer>
          </Trip>
        </Comps>
        <Aproved>Aprovados</Aproved>
        <Sucess></Sucess>
      </Main>
      <Buttons>
        <Button onClick={goToAdmin}>
          <div className="middle btn btn1">Voltar</div>
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
