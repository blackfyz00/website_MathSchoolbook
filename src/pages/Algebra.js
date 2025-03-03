import React from 'react';
import { Link } from 'react-router-dom';
import './Algebra.css'; // Импортируем стили

function Algebra() {
  return (
    <div className="algebra-container">
      {/* Заголовок "Алгебра" по центру */}
      <h1 className="algebra-title">Алгебра</h1>

      {/* Блок с темами слева */}
      <aside className="algebra-sidebar">
        <nav className="algebra-nav">
          <Link to="/math/algebra/linear" className="algebra-link">
            Линейные уравнения
          </Link>
          <Link to="/math/algebra/quadratic" className="algebra-link">
            Квадратные уравнения
          </Link>
          <Link to="/math/algebra/functions" className="algebra-link">
            Функции
          </Link>
          <Link to="/math/algebra/matrices" className="algebra-link">
            Матрицы и определители
          </Link>
        </nav>
      </aside>

      {/* Изображение справа */}
      <aside className="mathematician-image-Eyler">
        <img src="/images/Eyler.jpg" alt="Известный математик" className="mathematician-img" />
      </aside>
    </div>
  );
}

export default Algebra;