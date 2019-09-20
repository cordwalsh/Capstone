import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header'


// import reactLogo from './assets/React-icon.png';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <Header />

        

      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
