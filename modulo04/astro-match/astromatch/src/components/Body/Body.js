import React, { useState, useEffect } from 'react'
import ChamaLista from '../ChamaLista/ChamaLista.js'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: black;
  width: 350px;
  height: 650px;
  border: 1px solid black;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 420px) {
    height: 90vh;
  }
  hr {
    width: 99.5%;
    margin-top: -5px;
  }
`

const FontBorder = styled.div`
  font-size: 10px;
  color: black;
`
const SubContainer = styled.div`
  width: 300px;
  height: 500px;
  background-color: gray;
  border-radius: 15px;
  font-family: 'Roboto';
  font border: 2px;
  #bloco{
		background-color: black;
		box-shadow: 0 5px 20px 0 rgba(28,28,28,0.99);
	};
  .white-with-red-shadow {
   text-shadow: 1px 1px 2px black, 0 0 1em red, 0 0 0.2em blue;
   color: white;
   font: 1.5em Roboto,
`
const Imagem = styled.img`
  margin-bottom: -13.5px;
  border-radius: 15px;
  width: 300px;
  height: 450px;
  margin-bottom: -130px;
`
const NomeUser = styled.div`
  color: white;
  font-size: 1.7rem;
  margin: 8px;
`
const CidadeUser = styled.div`
  font-family: 'Roboto';
  color: white;
  font-size: 1.6rem;
  margin: 8px;
`
const IntereseUser = styled.div`
  font-family: 'Roboto';
  color: white;
  font-size: 1.3rem;
  margin: 8px;
`
const Tinder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;

  img {
    height: 30px;
    margin-left: 10px;
  }
  .white-with-blue-shadow {
    text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
    color: white;
    font: 1.5em Roboto;
  }

  button {
    width: 70px;
    height: 70px;
    border: 0.5px;
    background-color: transparent;
    cursor: pointer;
  }
`

export default function Body(props) {
  const [mudaTela, setMudaTela] = useState(true)
  const [user, setUser] = useState({})

  useEffect(() => {
    pegaUser()
  }, [user])

  const pegaUser = () => {
    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-ribeiro/person'
      )
      .then(response => {
        setUser(response.data)
      })
      .catch(error => {
        alert(error)
      })
  };
  const ListaChamada = () => {
    setMudaTela(!mudaTela)
  }
  
  const fotosUser = () => {
    const novas = user.map((nova) => {
      return console.log(nova)
    })
  }
  
  return (
    <>
      {mudaTela ? (
        <Container>
          <Tinder>
            <div>
              <button className="threed1">
                <img src="/img/tinder.png" aria-label="Tinder" alt="Tinder" />
              </button>
            </div>
            <div>
              <h1 className="white-with-blue-shadow">astromatch</h1>
            </div>
            <div>
              <button className="threed1" onClick={ListaChamada}>
                <img
                  className="threed2"
                  src="/img/peoples.png"
                  alt="Users"
                  aria-label="Users"
                />
              </button>
            </div>
          </Tinder>
          <hr size="1" color="black" />
          <SubContainer>
            <FontBorder className="white-with-red-shadow">
              {fotosUser}
              <NomeUser>Nome: Ricardo</NomeUser>
              <CidadeUser>Cidade: Conc. dos Ouros</CidadeUser>
              <IntereseUser>Interesse: Dev</IntereseUser>
            </FontBorder>
          </SubContainer>
          <Footer />
        </Container>
      ) : (
        <ChamaLista ListaChamada={ListaChamada} />
      )}
    </>
  )
}
