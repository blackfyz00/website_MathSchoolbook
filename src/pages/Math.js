import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link

function Math() {
  return (
    <div className="math-page">
      <h1>Математика</h1>
      {/* Простые ссылки без навигации */}
      <div className="math-links">
        <Link to="/math/intro" className="math-link">Введение</Link>
        <Link to="/math/algebra" className="math-link">Алгебра</Link>
        <Link to="/math/geometry" className="math-link">Геометрия</Link>
      </div>
    </div>
  );
}

export default Math;