import React, { useState, useEffect } from 'react'
import CallList from '../CallList/CallList.js'
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
  height: 600px;
  border: 1px solid black;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 0 10px 0 rgba(28, 28, 28, 0.99);

  .threed1 {
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }

  .white-with-blue-shadow {
    text-shadow: 2px 2px 3px black, 0 0 1em black, 0 0 0.2em blue;
    color: black;
    font: 1.5em Roboto;
  }

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
  height: 450px;
  border-radius: 15px;
`
const Image = styled.img`
  border-radius: 15px;
  width: 300px;
  height: 450px;
  margin-bottom: -130px;
`
const Block = styled.div`
  border: 0;
  background-color: black;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(28, 28, 28, 0.99);
`

const DateUser = styled.div`
  color: white;
  font-size: 1.3rem;
  margin: 8px;
`
const BioUser = styled.div`
  font-family: 'Roboto';
  color: white;
  font-size: 1.1rem;
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
  const [chanceScreen, setChanceScreen] = useState(true)
  const [listMach, setListMach] = useState({})
  const [user, setUser] = useState({})
  const [noMatch, setNoMatch] = useState(0)

  const CalledList = () => {
    setChanceScreen(!chanceScreen)
  }

  const getProfile = async () => {
    await axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ribeiro/person'
      )
      .then(res => {
        setUser(res.data.profile)
      })
      .catch(error => {
        alert('Erro de autenticação')
      })
  }

  const countUpdate = () => {
    setNoMatch(noMatch + 1)
  }

  useEffect(() => {
    getProfile()
  }, [listMach, noMatch])

  const postMatch = () => {
    const body = {
      id: user.id,
      choice: true
    }
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-ribeiro/choose-person`,
        body,
        {
          headers: {
            Autorization: 'ricardo-ribeiro'
          }
        }
      )
      .then(res => {
        setListMach(res.data)
      })
      .catch(error => {
        alert('Erro de autenticação')
      })
  }

  return (
    <>
      {chanceScreen ? (
        <Container>
          <Tinder>
            <div>
              <button>
                <a
                  href="https://github.com/RickHardBR/RickHardBR"
                  target="_blank" rel="noreferrer"
                >
                  <img
                  className="threed1"
                  src="/img/GitHub.png"
                  aria-label="GitHub"
                  alt="GitHub" 
                  />
                </a>
              </button>
            </div>
            <div>
              <h1 className="white-with-blue-shadow">ASTRO💕MATCH</h1>
            </div>
            <div>
              <button onClick={CalledList}>
                <img
                  src="/img/peoples.png"
                  alt="Users"
                  aria-label="Users"
                />
              </button>
            </div>
          </Tinder>
          <hr size="1" color="black" />
          <Block >
            <SubContainer>
              <FontBorder className="white-with-blue-shadow">
                <Image className="Block " src={user.photo} />
                <DateUser>
                  {user.name} {user.age}
                </DateUser>
                <BioUser>{user.bio}</BioUser>
              </FontBorder>
            </SubContainer>
          </Block >
          <Footer postMatch={postMatch} countUpdate={countUpdate} />
        </Container>
      ) : (
        <CallList CalledList={CalledList} listMach={listMach} />
      )}
    </>
  )
}
