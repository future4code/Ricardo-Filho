import axios from "axios";
import styled from "styled-components";
import swal from "sweetalert";
import img from "./images/fundo.jpg"

const Container = styled.div`
  font-size: 5vh;
  font-family: 'Roboto';
  color: #FDFDFD;
  text-align: center;
`
const Logo = styled.img`
  width:25vw;
`
const Background = styled.div`
position: relative;
background-color: #FFFFF0;
background-image: url(${img});
width: 100vw;
height: 100vh;
background-size: cover;
`

const Button = styled.div`


.middle{
  position: absolute;
  width: 9vw;
  height: 2vh;
  top: 0%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.btn{
  position: relative;
  display: block;
  color: white;
  font-size: 14px;
  font-family: "montserrat";
  text-decoration: none;
  margin: 30px 0;
  border: 2px solid #ff7675;
  padding: 14px 60px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
}
.btn::before{
  background: #ff7675;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: -1;
  transition: all 0.6s ease;
}

.btn1::before{
  width: 0%;
  height: 100%;
}

.btn1:hover::before{
  width: 100%;
}
`
function App() {
  return (
    <Container>
      <Background>
      <header>
        <Logo src= "/logospacelabex.png" alt="logo" />
        <p>
          SpaceLabex - Travels
        </p>
        <p>
          Te levando a lugares onde só os Deuses estiveram.
        </p>
        
          Aguarde...
          <Button>
            <div className="middle btn btn1">Ver Viagens</div>
            <div className="middle btn btn1">Área de Admin</div>
          </Button>
      </header>
      </Background>
    </Container>
  );
}

export default App;
