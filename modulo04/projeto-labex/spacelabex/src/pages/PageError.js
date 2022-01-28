import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1e1e1e;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Imagem = styled.img``

export default function ErrorPage() {
  return (
    <Container>
      <Imagem src="/error.png" />
    </Container>
  )
}
