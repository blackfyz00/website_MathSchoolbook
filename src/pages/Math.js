import React from 'react';
import { Link } from 'react-router-dom';
import './Math.css';

function Math() {
  return (
    <div className="math-page">
      <h1 className="math-title">Математика</h1>
      {/* Текст "Выберите раздел" */}
      <p className="math-subtitle">Выберите раздел:</p>
      {/* Блок с кнопками-ссылками, организованными в матрицу */}
      <div className="math-grid">
        <Link to="/math/intro" className="math-link">Введение</Link>
        <Link to="/math/algebra" className="math-link">Алгебра</Link>
        <Link to="/math/geometry" className="math-link">Геометрия</Link>
        <Link to="/math/calculus" className="math-link">Матанализ</Link>
        <Link to="/math/trigonometry" className="math-link">Тригонометрия</Link>
        <Link to="/math/statistics" className="math-link">Статистика</Link>
        <Link to="/math/probability" className="math-link">Теория вероятностей</Link>
        <Link to="/math/logic" className="math-link">Математическая логика</Link>
        <Link to="/math/number-theory" className="math-link">Теория чисел</Link>
      </div>
    </div>
  );
}

export default Math;