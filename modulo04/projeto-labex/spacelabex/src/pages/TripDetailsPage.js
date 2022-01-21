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
  width: 100vw;
  height: 100vh;
  background-size: cover;
  font-size: 5vh;
  font-family: 'Roboto';
  color: #fdfdfd;
  text-align: center;
`
const Header = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 0.1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  .textHeader {
    margin-top: 2px;
    color: #fffff0;
    font-size: 0.4em;
    font-family: 'Roboto';
  }
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
  text-align:left;
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
    width: 9vw;
    height: 1.5vh;
    transform: translate(-10, -25%);
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
export default function TripDet() {
  const history = useHistory()
  const goToAdmin = () => {
    history.push('/Admin')
  }

  return (
    <Container>
      <Header>
        <LogoHeader src="/logospacelabex.png" alt="logo" />
        <div className="textHeader">
        Te levando a lugares onde só os Deuses estiveram
        </div>
        <div className="textHeader">
          <Buttons>
            <Button>
              <div className="middle btn btn1">TESTE</div>
            </Button>
            <Button>
              <div className="middle btn btn1">TESTE</div>
            </Button>
            <Button>
              <div className="middle btn btn1">TESTE</div>
            </Button>
          </Buttons>
        </div>
      </Header>
      <Main>
        <Comps>
          <Trip>
            
            <div>Viagens</div>
            <hr />
            <TextContainer>
            <div>Nome: MilkWay Tour</div>
            <hr />
            <div>Planeta: Netuno</div>
            <hr />
            <div>Descrição: Tour pela Milk Way toda, da Terra até Netuno (Não passaremos em Plutão que não é mais um planeta)</div>
            <hr />
            <div>Data: 2022-02-20</div>
            <hr />
            <div>Duração: 365 dias</div>
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
