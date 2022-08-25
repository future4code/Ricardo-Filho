import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/BaseUrl"
import {GeneralContainer,LeftColTimeMania,RightCol,TitleWrap,Title,LogoLoterias,NumbersWrap,GameTitle,GameNumberDate,Obs,} from "../../constants/StyledGlobal"
import loteria from "../../assets/images/loteria.png"
import NumeroSorteio from "../../components/NumeroSorteio"

export default function Timemania () {
  const [relacaoConcurso, setRelacaoConcurso] = useState([])
  const [concursoId, setConcursoId] = useState("")
  const [concursos, setConcursos] = useState([])

  const getRelacaoConcursos = () => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setRelacaoConcurso(res.data[4])
        if (relacaoConcurso) {
          setConcursoId(res.data[4].concursoId)
        }

        
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getConcursosById = (id) => {
    axios
      .get(`${BASE_URL}/concursos/${id}`)
      .then((res) => {
        setConcursos(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getRelacaoConcursos()
  }, [])

  useEffect(() => {
    if (concursoId) getConcursosById(concursoId)
  }, [concursoId])

  const data = new Date(concursos?.data)
  const formatedDate = data.toLocaleDateString("pt-BR", { timeZone: "UTC" })

  return (
    <GeneralContainer>
      <LeftColTimeMania></LeftColTimeMania>
      <TitleWrap>
        <LogoLoterias src={loteria} />
        <Title>TIMEMANIA</Title>
      </TitleWrap>
      <GameTitle>
        <p>CONCURSO {concursos.id}</p>
      </GameTitle>
      <GameNumberDate>
        <p>
         {data && formatedDate}
        </p>
      </GameNumberDate>
      <RightCol>
        <NumbersWrap>
          <ul>
            {concursos.numeros &&
              concursos.numeros.map((item) => (
                <NumeroSorteio numbers={item} key={item} />
              ))}
          </ul>
        </NumbersWrap>
       
        <Obs>
          Este sorteio é meramente ilustrativo.
        </Obs>
      </RightCol>
    </GeneralContainer>
  )
}