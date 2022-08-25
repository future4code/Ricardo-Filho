import axios from "axios"
import React, { useEffect, useState } from "react"
import Router from "./routes/Router"
import { BASE_URL } from "./constants/BaseUrl"
import { BrowserRouter } from "react-router-dom"
import Main from "./components/Main"


const App = () => {

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
    <BrowserRouter>
      <Main data={concursos}/>
      <Router />
    </BrowserRouter>
  );
}

export default App
