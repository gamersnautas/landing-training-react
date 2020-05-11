import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

/* Bootstrap */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"

/* Custom StyleSheet */

import "./main.css"

/* Components */

import { Navbar } from './components/Navbar'
import { Slide } from './components/Slide'
import { Info } from './components/Info'
import { Goals } from './components/Goals'
import { Trainers } from './components/Trainers'
import { Motivation } from './components/Motivation'
import { Prices } from './components/Prices'
import { Form } from './components/Form'

const App = () => {

  return (

    <Router>

      <Navbar />
      <Slide />
      <Info />
      <Goals />
      <Trainers />
      <Motivation />
      <Prices />
      <Form />

    </Router>

  );
}

export default App;
