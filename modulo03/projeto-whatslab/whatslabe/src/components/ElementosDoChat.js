import styled from 'styled-components';
import bgWhats from '../img/backgroundmensage.png';

export const ContainerChat = styled.div`
  height: 90vh;
  min-width: 60%;
  max-width: 450px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${bgWhats});
  background-size: 280px;
`;

export const BalaoMensage = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: transparent;
  overflow-y: auto;
  margin: 0;
  

  ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  };

  ::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.6 );
  }
`;

export const ContainerMensagem = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 60%;
  word-break: normal;
  background-color: #008080;
  border-radius: 10px;
  margin: 0.6rem;
  cursor: pointer;
  color: #FFF;
  
`;

export const Texto = styled.p`
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  word-break: normal;
  :first-of-type {
    font-weight: bold;
    padding-bottom: 0;
    
  }
`;

export const FormChat = styled.form`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 8px;
  margin-top: 1.5rem;
  margin-bottom: 0.3rem;
  
`;

export const InputUsuario = styled.input`
  font-size: 0.7rem;
  width: 100px;
  color:  #FDFDFD;
  background-color:  #4F4F4F;
  padding: 0.6rem;
  margin-left: 8px;
  margin-bottom: 4px;
  border-radius: 10px;
  outline: none;
  border: none;
`;

export const InputMensagem = styled.input`
  font-size: 0,7rem;
  color:  #FDFDFD;
  flex-grow: 1;
  width: 170px;
  padding: 0.6rem;
  background-color: #4F4F4F;
  border-radius: 10px;
  margin-bottom: 4px;
  outline: none;
  border: none;
`;

export const BtnEnviar = styled.button`
  font-size: 1rem;
  color: #FFFFFF;
  font-weight: bold;
  padding: 0.6rem;
  background-color: #363636;
  border-radius: 10px;
  margin-right: 8px;
  margin-bottom: 4px;
  border: none;
`;
