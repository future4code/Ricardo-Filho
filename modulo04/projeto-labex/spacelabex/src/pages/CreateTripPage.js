import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
  width: 100vw;
  height: 100vh;
  background-size: cover;
  font-size: 6vh;
  font-family: 'Roboto';
  color: #fdfdfd;
  text-align: center;
`
const Header = styled.div`
  display: flex;
  width: 100%;
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
  width: 100vw;
  height: 100%;
  align-items: center;
  justify-content: center;
`
const LogoHeader = styled.img`
  width: 60px;
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
    width: 9vw;
    height: 1.5vh;
    transform: translate(-10, -25%);
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
const Trip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 300px;
`
const Select = styled.select`
  width: 320px;
  height: 40px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  margin: 0px 0px 15px;
`
const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`
const Data = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding: 14px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`
const Title = styled.h1`
  font-size: 0.8em;
  margin-top: -150px;
  font-weight: bold;
  margin-bottom: 50px;
`
const Footer = styled.div`
  background: rgba(0, 0, 0, 0.5);
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

export default function CreateTrip() {
  const history = useHistory()
  const goToAdmin = () => {
    history.push('/Admin')
  }

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
              <a
                href="https://github.com/RickHardBR/RickHardBR"
                target="_blank"
              >
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
        </div>
      </Header>
      <Main>
        <Trip>
          <Title>Criar Viagem</Title>
          <Form>
            <Input placeholder="Nome" />
            <Select>
              <option>Escolha um Planeta</option>
              <option>Mercúrio</option>
              <option>Vênus</option>
              <option>Terra</option>
              <option>Marte</option>
              <option>Júpiter</option>
              <option>Saturno</option>
              <option>Urano</option>
              <option>Netuno</option>
              <option>Plutão</option>
            </Select>
            <Data type="date" name="diaa" required />
            <Input placeholder="Descrição" required />
            <Input placeholder="Duração em dias" required />
          </Form>
        </Trip>
      </Main>
      <Buttons>
        <Button onClick={goToAdmin}>
          <div className="middle btn btn1">Voltar</div>
        </Button>
        <Button>
          <div className="middle btn btn1">Criar</div>
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
