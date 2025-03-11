// src/components/SideMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css'; // Стили для бокового меню

function SideMenu() {
  const [openClasses, setOpenClasses] = useState({}); // Для управления классами (1 класс, 2 класс и т.д.)
  const [openTopics, setOpenTopics] = useState({}); // Для управления темами внутри предметов

  const toggleClass = (className) => {
    setOpenClasses((prev) => {
      // Сбрасываем состояние всех классов, кроме текущего
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      newState[className] = !prev[className]; // Переключаем состояние текущего класса
      return newState;
    });
  };

  const toggleTopic = (topicKey) => {
    setOpenTopics((prev) => ({
      ...prev,
      [topicKey]: !prev[topicKey], // Переключаем состояние конкретной темы
    }));
  };
  
  return (
    <div className="side-menu">
      {/* Содержимое меню */}
      <nav>
        <h2>Меню</h2>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
        <li>
        <div className="toggle-button" onClick={() => toggleClass('class1')}>
          1 класс {openClasses.class1 ? '▼' : '▶'}
        </div>
        {openClasses.class1 && (
          <ul>
            <li>
              <div className="toggle-button" onClick={() => toggleTopic('math1')}>
                Математика {openTopics.math1 ? '▼' : '▶'}
              </div>
              {openTopics.math1 && (
                <ul>
                  <li>
                    <Link to="/math/topic11">Тема 1: Сложение и вычитание</Link>
                  </li>
                  <li>
                    <Link to="/math/topic12">Тема 2: Умножение и деление</Link>
                  </li>
                  <li>
                    <Link to="/math/topic13">Тема 3: Дроби</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </li>
      <li>
        <div className="toggle-button" onClick={() => toggleClass('class2')}>
          2 класс {openClasses.class2 ? '▼' : '▶'}
        </div>
        {openClasses.class2 && (
          <ul>
            <li>
              <div className="toggle-button" onClick={() => toggleTopic('math2')}>
                Математика {openTopics.math1 ? '▼' : '▶'}
              </div>
              {openTopics.math2 && (
                <ul>
                  <li>
                    <Link to="/math/topic21">Тема 1: Сложение и вычитание</Link>
                  </li>
                  <li>
                    <Link to="/math/topic22">Тема 2: Умножение и деление</Link>
                  </li>
                  <li>
                    <Link to="/math/topic23">Тема 3: Дроби</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </li>
      <li>
        <div className="toggle-button" onClick={() => toggleClass('class3')}>
          3 класс {openClasses.class3 ? '▼' : '▶'}
        </div>
        {openClasses.class3 && (
          <ul>
            <li>
              <div className="toggle-button" onClick={() => toggleTopic('math3')}>
                Математика {openTopics.math3 ? '▼' : '▶'}
              </div>
              {openTopics.math3 && (
                <ul>
                  <li>
                    <Link to="/math/topic31">Тема 1: Сложение и вычитание</Link>
                  </li>
                  <li>
                    <Link to="/math/topic32">Тема 2: Умножение и деление</Link>
                  </li>
                  <li>
                    <Link to="/math/topic33">Тема 3: Дроби</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </li>

      <li>
        <div className="toggle-button" onClick={() => toggleClass('class4')}>
          4 класс {openClasses.class4 ? '▼' : '▶'}
        </div>
        {openClasses.class4 && (
          <ul>
            <li>
              <div className="toggle-button" onClick={() => toggleTopic('math4')}>
                Математика {openTopics.math1 ? '▼' : '▶'}
              </div>
              {openTopics.math4 && (
                <ul>
                  <li>
                    <Link to="/math/topic41">Тема 1: Сложение и вычитание</Link>
                  </li>
                  <li>
                    <Link to="/math/topic42">Тема 2: Умножение и деление</Link>
                  </li>
                  <li>
                    <Link to="/math/topic43">Тема 3: Дроби</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </li>

      <li>
        <div className="toggle-button" onClick={() => toggleClass('class5')}>
          5 класс {openClasses.class5 ? '▼' : '▶'}
        </div>
        {openClasses.class5 && (
          <ul>
            <li>
              <div className="toggle-button" onClick={() => toggleTopic('math5')}>
                Математика {openTopics.math5 ? '▼' : '▶'}
              </div>
              {openTopics.math5 && (
                <ul>
                  <li>
                    <Link to="/math/topic51">Тема 1: Сложение и вычитание</Link>
                  </li>
                  <li>
                    <Link to="/math/topic52">Тема 2: Умножение и деление</Link>
                  </li>
                  <li>
                    <Link to="/math/topic53">Тема 3: Дроби</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </li>

      <li>
        <div className="toggle-button" onClick={() => toggleClass('class6')}>
          6 класс {openClasses.class6 ? '▼' : '▶'}
        </div>
        {openClasses.class6 && (
          <ul>
            <li>
              <div className="toggle-button" onClick={() => toggleTopic('math6')}>
                Математика {openTopics.math6 ? '▼' : '▶'}
              </div>
              {openTopics.math6 && (
                <ul>
                  <li>
                    <Link to="/math/topic61">Тема 1: Сложение и вычитание</Link>
                  </li>
                  <li>
                    <Link to="/math/topic62">Тема 2: Умножение и деление</Link>
                  </li>
                  <li>
                    <Link to="/math/topic63">Тема 3: Дроби</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </li>

      <li>
        <div className="toggle-button" onClick={() => toggleClass('class7')}>
          7 класс {openClasses.class7 ? '▼' : '▶'}
        </div>
        {openClasses.class7 && (
          <ul>
            <li>
              <div className="toggle-button" onClick={() => toggleTopic('math7')}>
                Математика {openTopics.math7 ? '▼' : '▶'}
              </div>
              {openTopics.math7 && (
                <ul>
                  <li>
                    <Link to="/math/topic71">Тема 1: Сложение и вычитание</Link>
                  </li>
                  <li>
                    <Link to="/math/topic72">Тема 2: Умножение и деление</Link>
                  </li>
                  <li>
                    <Link to="/math/topic73">Тема 3: Дроби</Link>
                  </li>
                </ul>
              )}
              <div className="toggle-button" onClick={() => toggleTopic('geom7')}>
                Геометрия {openTopics.geom7 ? '▼' : '▶'}
              </div>
              {openTopics.geom7 && (
                <ul>
                  <li>
                    <Link to="/geom/topic71">Тема 1: Сложение и вычитание</Link>
                  </li>
                  <li>
                    <Link to="/geom/topic72">Тема 2: Умножение и деление</Link>
                  </li>
                  <li>
                    <Link to="/geom/topic73">Тема 3: Дроби</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
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