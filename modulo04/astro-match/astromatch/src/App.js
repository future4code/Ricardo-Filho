import Body from './components/Body/Body';
import styled from 'styled-components';
import axios from 'axios';
import react, {useState, useEffect} from 'react';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`
const DivMeio = styled.div`
  margin-top: 50px;
`

export default function App() {
  return (
     <Container>
       <DivMeio>
      <Body/>
      </DivMeio>
    </Container>
     );
}

