import styled from "styled-components"
import backgroundMega from "../assets/images/mega.svg"
import backgroundDiaDeSorte from "../assets/images/diadesorte.svg"
import backgroundLotoFacil from "../assets/images/lotofacil.svg"
import backgroundLotoMania from "../assets/images/lotomania.svg"
import backgroundQuina from "../assets/images/quina.svg"
import backgroundTimeMania from "../assets/images/timemania.svg"

export const GeneralContainer = styled.div`
  display: flex;
  background-color: var(--background);
  
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`
export const LeftColMega = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-image: url(${backgroundMega});
  background-repeat: no-repeat;
  z-index: 0;
  transform-origin: right bottom;
  position: relative;
  @media screen and (max-width: 900px) {
    flex: 0.5;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    transform: skewY(10deg);
    transform-origin: top right;
  }
`
export const LeftColQuina = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-image: url(${backgroundQuina});
  background-repeat: no-repeat;
  z-index: 0;
  transform-origin: right bottom;
  position: relative;
  @media screen and (max-width: 900px) {
    flex: 0.5;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    transform: skewY(10deg);
    transform-origin: top right;
  }
`
export const LeftColLotoFacil = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-image: url(${backgroundLotoFacil});
  background-repeat: no-repeat;
  z-index: 0;
  transform-origin: right bottom;
  position: relative;
  @media screen and (max-width: 900px) {
    flex: 0.5;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    transform: skewY(10deg);
    transform-origin: top right;
  }
`

export const LeftColLotoMania = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-image: url(${backgroundLotoMania});
  background-repeat: no-repeat;
  z-index: 0;
  transform-origin: right bottom;
  position: relative;
  @media screen and (max-width: 900px) {
    flex: 0.5;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    transform: skewY(10deg);
    transform-origin: top right;
  }
`

export const LeftColTimeMania = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-image: url(${backgroundTimeMania});
  background-repeat: no-repeat;
  z-index: 0;
  transform-origin: right bottom;
  position: relative;
  @media screen and (max-width: 900px) {
    flex: 0.5;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    transform: skewY(10deg);
    transform-origin: top right;
  }
`
export const LeftColDiaDeSorte = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-image: url(${backgroundDiaDeSorte});
  background-repeat: no-repeat;
  z-index: 0;
  transform-origin: right bottom;
  position: relative;
  @media screen and (max-width: 900px) {
    flex: 0.5;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    transform: skewY(10deg);
    transform-origin: top right;
  }
`

export const RightCol = styled.div`
  flex: 0.9;
  flex-direction: column;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -450px;
  @media screen and (max-width: 900px) {
    flex: 0.6;
    margin-top: 23rem;
    margin-right: 1.5em;
    height: 100%;
  }
`

export const TitleWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  left: 7.5%;
  top: 50%;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    top: unset;
    left: unset;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10em;
  }
`

export const Title = styled.p`
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.7rem;
  font-weight: 600;
  padding: 0 0.8em;
  text-shadow: 1px 1px 2px var(--text-number);
  @media screen and (max-width: 900px) {
    padding: 0;
    line-height: 0;
  }
`

export const LogoLoterias = styled.img`
  width: 60px;
  height: 60px;
  
`

export const NumbersWrap = styled.div`
  display: flex;
  ul {
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: 70px;
    @media screen and (max-width: 900px) {
      margin-left: 470px;
    }
  }
`

export const GameTitle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  left: 7.5%;
  bottom: 10%;
  p {
    color: var(--white);
    font-size: 1.1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-shadow: 1px 1px 2px var(--text-number);
  }
  @media screen and (max-width: 900px) {
    bottom: unset;
    left: unset;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 19em;
  }
`

export const GameNumberDate = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  left: 7.5%;
  bottom: 5%;
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  text-shadow: 1px 1px 2px var(--text-number);
  @media screen and (max-width: 900px) {
    bottom: unset;
    left: unset;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 16em;
  }
`

export const Obs = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  width: 70%;
  text-align: justify;
  line-height: 1.3;
  margin-top: 30px;
  color: var(--text-obs);
  @media screen and (min-width: 900px) {
    position: absolute;
    bottom: 10%;
  }
`

export const MainContainer = styled.div `
    background-color: transparent;
    position: absolute;
    display: flex;
    z-index: 2;
    width: auto;
    height: 2.8rem;
    left: 5rem;
    top: 10%;
    
    @media screen and (max-width: 900px) {
        top: unset;
        left: unset;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 2.5em;
    }
`
export const SelectStyled = styled.select`
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  border-radius: 10px;
  border: none;
  background-color: white;
  width: 13.5rem;
  font-size: 1.1rem;
  display: flex;
  cursor: pointer;
  outline: 0;
  color: var(--text-number);
  transition: all 0.3s ease-in-out;
  option {
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 2px 2px 1px;
    color: var(--text-number);
  }
`

export const Lista = styled.li`
  background-color: #fff;
  border-radius: 50%;
  padding: 1.5em;
  margin: 20px;
  font-size: 1.7rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    padding: 1em;
  }
`