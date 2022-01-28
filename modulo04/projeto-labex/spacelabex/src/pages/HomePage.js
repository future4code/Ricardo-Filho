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
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: none;
  align-content: center;
  align-items: center;
`

const Logo = styled.img`
  width: 25vw;
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
    width: 150px;
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
  height: 60px;
  width: 100%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  bottom: 0;
  position: fixed;

  .textFooter {
    margin-top: 1px;
    color: #fffff0;
    font-size: 0.3em;
    font-family: 'Roboto';
  }
`
export default function HomePage() {
  const history = useHistory()
  const goToTrips = () => {
    history.push('/List')
  }
  const goToLogin = () => {
    history.push('/Login')
  }
  const goToApp = () => {
    history.push('/')
  }
  return (
    <Container>
      <Main>
        <div></div>
        <Logo src="images/logospacelabex.png" alt="logo" />
        <div>SpaceLabex - Travels</div>
        <div>Te levando a lugares onde só os Deuses estiveram.</div>
        <Buttons>
          <Button onClick={goToTrips}>
            <div className="middle btn btn1">Ver Viagens</div>
          </Button>
          <Button onClick={goToLogin}>
            <div className="middle btn btn1">Área de Admin</div>
          </Button>
        </Buttons>
      </Main>
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
