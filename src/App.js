import React, { Profiler } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Home from './Component/Fungsional/Home'
//import Beranda from './Component/Class/Beranda'
//import './Component/Class/Parent'
//import Parent from './Component/Class/Parent';
//import BoostrapComp from './Component/Class/BoostrapComp';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/Homepage';
import AboutComp from './Component/Fungsional/AboutComp';
import Profile from './Component/Fungsional/Profile';
//import CardComp from './Component/Fungsional/CardComp';
import DetailComp from './Component/Fungsional/DetailComp';

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/About" component={AboutComp} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/detail/:id" component={DetailComp} />
      </Switch>

    </BrowserRouter>

  );
}

export default App;
