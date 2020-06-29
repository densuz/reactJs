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
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Fungsional/TambahComp';
import EditComp from './Component/Fungsional/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
//import CardComp from './Component/Fungsional/CardComp';
//import DetailComp from './Component/Fungsional/DetailComp';



function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/About" component={AboutComp} />
        <Route exact path="/mahasiswa" component={ListComp} />
        <Route exact path="/mahasiswa/tambah" component={TambahComp} />
        <Route exact path="/mahasiswa/edit" component={EditComp} />
        <Route exact path="/kelas" component={KelasComp} />
        <Route exact path="/Hooks" component={HooksComp} />
        <Route exact path="/HooksEffects" component={HooksUseEffects} />

        {/* <Route exact path="/detail/:id" component={DetailComp}/> */}
      </Switch>

    </BrowserRouter>

  );
}

export default App;
