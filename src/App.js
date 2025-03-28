import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
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
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;