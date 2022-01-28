import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica',"Coda", 'sans serif';
    ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-button {
    width: 1px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 1 5px grey;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(128, 128, 128, 0.5);
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(211,211,211, 0.5);
  }
  }

`
export default GlobalStyle;