import React from 'react'
import styled from 'styled-components'
import axios from 'axios';
import react, {useState, useEffect} from 'react';

const StyledButton = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-family: 'Roboto', sans-serif;
  

  button {
    width: 70px;
    height: 70px;
    border: 0.5px;
    border-radius: 100px;
    font-size: 30px;
    background-color: transparent;
    cursor: pointer;
  }
  .grow1{
    border:0.1px solid;
    border-color: red;
  }
  .grow2{
    border:0.1px solid;
    border-color: green;
  }
  .grow3{
    border:0.1px solid;
    border-color: blue;
  }

  .grow1:hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.1);
    background: red;
    color: white;
    border: 0px;
  }
  .grow2:hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.1);
    background: green;
    color: white;
    border: 0px;
  }
  .grow3:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.3);
    transform: scale(1.1);
    background: blue;
    color: white;
    border: 0px;
  };
  abbr[title] {
  text-decoration: none;
}

`
export default function Footer() {
  return (
    <StyledButton>
      <abbr title="Não gostei">
      <button className="grow1">
      👎
      </button>
      </abbr>
      <abbr title="Gostei">
      <button className="grow2">
        👍
      </button>
      </abbr>
    </StyledButton>
  )
}
