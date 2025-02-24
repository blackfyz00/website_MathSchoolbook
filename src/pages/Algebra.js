// src/pages/Algebra.js
import React from 'react';
import { Link } from 'react-router-dom';

function Algebra() {
  return (
    <div className="container">
      <h1>Алгебра</h1>
      <nav>
        <Link to="/math/algebra/linear">Линейные уравнения</Link> | 
        <Link to="/math/algebra/quadratic">Квадратные уравнения</Link> | 
        <Link to="/math/algebra/functions">Функции</Link>
      </nav>
    </div>
  );
}

export default Algebra;