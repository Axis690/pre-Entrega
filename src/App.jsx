import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './App.css'
import Header from './Components/Header';
import Cartas from './Pages/Cartas';
import Carrito from './Pages/Carrito';
import Footer from './Components/Footer';
import React from 'react';
import Body from './Components/Body';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Cartas" element={<Cartas />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>

        {/* Contenido adicional (no limitado a ancho fijo) */}
        <div className="mt-5 px-3">
          <h1>Rick and Morty</h1>
          <p>Bienvenido a la aplicación de Rick and Morty</p>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
