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
  height: 650px;
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
  .threed2{
    filter: invert(100%);
  }
  hr {
  color:black;
  width:100%;
  margin-top:-5px;
 
`
const SubContainer = styled.div`
  text-align: center;
  width: 300px;
  height: 650px;
  margin-bottom:10px;
  background-color: #F5F5F5;
  border-radius: 15px;
  font-family: 'Roboto';
  padding:10px;
  border:0;
		box-shadow: 0 0 10px 0 rgba(28,28,28,0.99);
	};
 
  .white-with-red-shadow {
   text-shadow: 1px 1px 2px black, 0 0 1em red, 0 0 0.2em blue;
   color: white;
   font: 1.5em Roboto,
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
export default function ChamaLista({ ListaChamada }) {
  return (
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
      <hr />
      <SubContainer>
      <p>teste 1</p>
      <p>teste 2</p>
      <p>teste 3</p>
      <p>teste 4</p>
      <p>teste 5</p>
      <p>teste 6</p>
      <p>teste 7</p>
      <p>teste 8</p>
      <p>teste 9</p>
      <p>teste 10</p>
      <p>teste 11</p>
      <p>teste 12</p>
      <p>teste 13</p>
      <p>teste 14</p>
      <p>teste 15</p>
      </SubContainer>
    </Container>
  )
}
