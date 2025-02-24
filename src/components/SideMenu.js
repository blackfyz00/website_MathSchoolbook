// src/components/SideMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css'; // Стили для бокового меню

function SideMenu() {
  const [isOpen, setIsOpen] = useState(true); // Состояние: открыто/закрыто

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Переключение состояния
  };

  return (
    <div className={`side-menu ${isOpen ? '' : 'closed'}`}>
      {/* Круглая кнопка с иконкой */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'} {/* Используем Unicode-символы для иконок */}
      </button>

      {/* Содержимое меню */}
      <nav>
        <h2>Меню</h2>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/math">Математика</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;