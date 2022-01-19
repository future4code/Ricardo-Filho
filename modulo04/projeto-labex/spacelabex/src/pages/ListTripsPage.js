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
function App() {
  return (
    <Container>
      <Background>
     <div>
Ver todas as viagens
     </div>
      </Background>
    </Container>
  );
}