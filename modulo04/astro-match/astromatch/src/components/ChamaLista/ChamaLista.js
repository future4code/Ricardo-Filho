import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: black;
  width: 350px;
  height: 600px;
  border: 1px solid black;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 420px) {
    height: 90vh;
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
  .threed2 {
    filter: invert(100%);
  }

  hr {
    width: 99.5%;
    margin-top: -5px;
  }
`
const SubContainer = styled.div`
  text-align: center;
  width: 300px;
  height: 650px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  border-radius: 15px;
  font-family: 'Roboto';
  padding: 10px;
  border: 0;
  box-shadow: 0 0 10px 0 rgba(28, 28, 28, 0.99);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-button {
    width: 1px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #836fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #6959cd;
  }
`

const Tinder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  img {
    height: 30px;
  }
`
const Imagem = styled.img`
  height: 100%;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  background-position: center center;
  background-size: 100%;
`
const Lista = styled.ul`
  padding: 0 10px;
`
const Item = styled.li`
  display: flex;
  height: 50px;
  padding: 10px;
  position: relative;
  border-radius: 20px;
  width: 95%;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    align-items: center;
    text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.1em blue;
    color: white;
    font: 1.5em Roboto;
  }

  :last-child {
    /* border: unset; */
  }

  :active {
    :before {
      height: 50%;
      width: 50%;
      top: 0;
      left: 0;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.1);
      content: '';
    }
  }
`
const Texto = styled.p`
  user-select: none;
`
const StyleButtonDelete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: 0;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

  :hover {
    color: black;
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 2px #3498db;
  }
`

export default function ChamaLista({ ListaChamada, listMach }) {
  const [matchList, setMatchList] = useState([])

  const getMatchs = async () => {
    await axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-ribeiro/matches'
      )
      .then(res => {
        setMatchList(res.data.matches)
      })
  }

  useEffect(() => {
    getMatchs()
  }, [])

  const clearMatch = () => {
    axios
      .put(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-ribeiro/clear'
      )
      .then(res => {
        alert('Você apagou todos os Matchs')
        setMatchList([])
      })
  }

  return (
    <>
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
          {matchList.map(match => {
            return (
              <Lista>
                <Item key={match.id}>
                  <Imagem src={match.photo} alt="Foto do Match" />
                  <Texto>{match.name}</Texto>
                </Item>
              </Lista>
            )
          })}
        </SubContainer>
      </Container>
      <StyleButtonDelete>
        <div></div>
        <div>
          <Button onClick={clearMatch}>Limpar Matchs</Button>
        </div>
        <div></div>
      </StyleButtonDelete>
    </>
  )
}
