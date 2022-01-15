import Body from './components/Body/Body'
import styled from 'styled-components'

const Container = styled.div`
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 420px) {
    height: 91vh;
  }
`
export default function App() {
  return (
    <Container>
      <Body />
    </Container>
  )
}
