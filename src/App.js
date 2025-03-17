// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import SideMenu from './components/SideMenu';
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
        </Routes>
      </div>
      </div>
    </Router>
  );
}
export default App;