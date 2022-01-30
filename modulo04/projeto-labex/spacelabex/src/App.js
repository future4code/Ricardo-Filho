import React, { useState, useEffect } from 'react'
import FaceApp from './pages/FaceApp'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageError from './pages/PageError'
import Admin from './pages/AdminHomePage'
import AppFP from './pages/ApplicationFormPage'
import CreateTrip from './pages/CreateTripPage'
import ListTrips from './pages/ListTripsPage'
import Login from './pages/LoginPage'
import TripDet from './pages/TripDetailsPage'
import GlobalStyle from './Components/GlobalStyle'



export default function Decolar() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path={'/'}>
          <FaceApp />
        </Route>
        <Route exact path={'/home'}>
          <HomePage />
        </Route>
        <Route exact path={'/List'}>
          <ListTrips />
        </Route>
        <Route exact path={'/Login'}>
          <Login />
        </Route>
        <Route exact path={'/Admin'}>
          <Admin />
        </Route>
        <Route exact path={'/AppFP'}>
          <AppFP />
        </Route>
        <Route exact path={'/CreateTrip'}>
          <CreateTrip />
        </Route>
        <Route exact path={'/TripDet'}>
          <TripDet />
        </Route>
        <Route>
          <PageError />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
