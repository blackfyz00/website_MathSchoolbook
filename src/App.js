import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CubeAndSphere from './pages/CubeAndSphere';
import Discriminant from './pages/Discriminant';
import About from './pages/About';
import SideMenu from './components/SideMenu';
import SearchBar from './components/SearchBar';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Поиск теперь вне хедера и выше всех элементов */}
        <div className="search-top-right">
          <SearchBar />
        </div>
        
        <div className="main-content">
          <SideMenu />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/math/topic02/cube-sphere" element={<CubeAndSphere/>} />
              <Route path="/math8/topic01/discriminant" element={<Discriminant/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;