import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white:#FFFFFF;
    --black:#000000;
    --background:#EFEFEF;
    --text-number:#333333;
    --mega:#6BEFA3;
    --quina:#8666EF;
    --lotofacil:#DD7AC6;
    --lotomania:#FFAB64;
    --timemania:#5AAD7D;
    --diadesorte:#BFAF83;
    --text-obs:#595959
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
font-family: 'Inter', sans-serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Source Code Pro', monospace;
`