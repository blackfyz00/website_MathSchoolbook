// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import SideMenu from './components/SideMenu';
import Math from './pages/Math';
import Intro from './pages/Intro';
import Algebra from './pages/Algebra';
import Geometry from './pages/Geometry';
import LinearEquations from './pages/LinearEquations'; // Новый импорт
import QuadraticEquations from './pages/QuadraticEquations'; // Новый импорт
import Functions from './pages/Functions'; // Новый импорт
import './styles/global.css'; // Добавляем этот импорт

function App() {
  return (
    <Router>
      <div className="App">
      <SideMenu />

      {/* Основное содержимое */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/math" element={<Math />} />
          <Route path="/math/intro" element={<Intro />} />
          <Route path="/math/algebra" element={<Algebra />} />
          <Route path="/math/algebra/linear" element={<LinearEquations />} /> {/* Новый маршрут */}
          <Route path="/math/algebra/quadratic" element={<QuadraticEquations />} /> {/* Новый маршрут */}
          <Route path="/math/algebra/functions" element={<Functions />} /> {/* Новый маршрут */}
          <Route path="/math/geometry" element={<Geometry />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}
export default App;