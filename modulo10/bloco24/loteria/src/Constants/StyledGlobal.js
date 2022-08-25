import styled from "styled-components"

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
  background: var(--mega);
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
  background: var(--quina);
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
  background: var(--lotofacil);
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
  background: var(--lotomania);
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
  background: var(--timemania);
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
  background: var(--diadesorte);
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
  -webkit-clip-path: ellipse(45px at 69px 55px);
    clip-path: ellipse(850px 1000px at 900px 450px);
    z-index: 1;
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