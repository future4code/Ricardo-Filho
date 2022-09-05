import React from "react"
import Router from "./routes/Router"
import { BrowserRouter } from "react-router-dom"
import GetLotteries  from "./Services/GetLotteries"


export default function App () {

    return (
    <BrowserRouter>
      <GetLotteries />
      <Router />
    </BrowserRouter>
  );
}