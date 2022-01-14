import styled from 'styled-components'
import React from 'react'

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
    border-radius: 100%;
    background-color: transparent;
    cursor: pointer;
  }

  .grow1:hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.1);
    border: 0px;
  }
  .grow2:hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.1);
    border: 0px;
  }
  .grow3:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.3);
    transform: scale(1.1);
    background: blue;
    color: white;
    border: 0px;
  }
  abbr[title] {
    text-decoration: none;
  }
`
const Images = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 0;
`
export default function Footer({ postMatch, countUpdate }) {
  return (
    <StyledButton>
      <abbr title="Não gostei">
        <button onClick={countUpdate} className="grow1">
          <Images src="/img/x1.png" />
        </button>
      </abbr>
      <abbr title="Gostei">
        <button onClick={() => postMatch()} className="grow2">
          <Images src="/img/y1.png" />
        </button>
      </abbr>
    </StyledButton>
  )
}
