import axios from "axios"
import Main from "../components/Main"
import { BASE_URL } from "../constants/BaseUrl"
import {
  useEffect,
  useState
} from "react"

export default function GetLotteries () {

  const [concursos, setConcursos] = useState([])

  const getConcursos = () => {
    axios
      .get(`${BASE_URL}/loterias`)

      .then((res) => {
        setConcursos(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getConcursos()
  }, [])

  return (
    <>
      <Main data={concursos}/>
    </>
  );
}