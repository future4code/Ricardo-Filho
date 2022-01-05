import React from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: col;
  align-items: center;
  flex-wrap: wrap;
 `
 const AppBox = styled.div `
    margin: 5px;
    padding: 5px;
    width: 300px;
    height: 330px;
`
const Topo = styled.header`
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #ccc;
  font-size: 55px;

`
const Base = styled.header`
  height: 50px;
  text-align: center;
  background-color: #ccc;
  font-size: 20px;
  position:fixed;
	bottom:0;
	width:100%;

`
const App = () => {
  return (
    <><Topo>"HOOKs"</Topo>
    <AppContainer>

      <AppBox>
        <Post
          nomeUsuario={'Ricardo'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'} />
      </AppBox>
      <AppBox>
        <Post
          nomeUsuario={'Carlos'}
          fotoUsuario={'https://picsum.photos/51/50'}
          fotoPost={'https://picsum.photos/201/150'} />
      </AppBox>
      <AppBox>
        <Post
          nomeUsuario={'Rebeka'}
          fotoUsuario={'https://picsum.photos/52/50'}
          fotoPost={'https://picsum.photos/202/150'} />
      </AppBox>
      <AppBox>
        <Post
          nomeUsuario={'Paula'}
          fotoUsuario={'https://picsum.photos/53/50'}
          fotoPost={'https://picsum.photos/203/150'} />
      </AppBox>
      <AppBox>
        <Post
          nomeUsuario={'Pedro'}
          fotoUsuario={'https://picsum.photos/54/50'}
          fotoPost={'https://picsum.photos/204/150'} />
      </AppBox>
      <AppBox>
        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={'https://picsum.photos/55/50'}
          fotoPost={'https://picsum.photos/205/150'} />
      </AppBox>
      <AppBox>
        <Post
          nomeUsuario={'Enzo'}
          fotoUsuario={'https://picsum.photos/56/50'}
          fotoPost={'https://picsum.photos/206/150'} />
      </AppBox>
      <AppBox>
        <Post
          nomeUsuario={'Thais'}
          fotoUsuario={'https://picsum.photos/57/50'}
          fotoPost={'https://picsum.photos/207/150'} />
      </AppBox>
    </AppContainer>
    <Base>RickHard´Wares</Base>
    </>
    
  );
  
}


export default App;
