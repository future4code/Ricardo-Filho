import React from "react"
import { Routes, Route } from "react-router-dom"
import DiaDeSortePage from "../pages/DiaDeSortePage/DiaDeSortePage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LotoFacilPage from "../pages/LotoFacilPage/LotoFacil"
import LotoManiaPage from "../pages/LotoManiaPage/LotoMania"
import MegaPage from "../pages/MegaPage/Mega"
import QuinaPage from "../pages/QuinaPage/Quina"
import TimeManiaPage from "../pages/TimeManiaPage/TimeMania"

export default function Router () {

    return (
            <Routes>
                <Route path="/" element={<MegaPage />} />
                
                <Route path="/quina" element={<QuinaPage />} />
                
                <Route path="/lotofacil" element={<LotoFacilPage />} />
                
                <Route path="/lotomania" element={<LotoManiaPage />} />
                                
                <Route path="/timemania" element={<TimeManiaPage />} />
                
                <Route path="/diadesorte" element={<DiaDeSortePage />} />

                <Route element = {<ErrorPage />} />

            </Routes>
    )
}