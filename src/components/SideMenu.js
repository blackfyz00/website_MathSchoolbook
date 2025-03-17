import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuData from './menuData'; // Импортируем данные
import './SideMenu.css'; // Стили для бокового меню

function SideMenu() {
  const [openClasses, setOpenClasses] = useState({}); // Для управления классами
  const [openTopics, setOpenTopics] = useState({}); // Для управления предметами
  const [openSections, setOpenSections] = useState({}); // Для управления разделами

  const toggleClass = (className) => {
    setOpenClasses((prev) => {
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      newState[className] = !prev[className]; // Переключаем состояние текущего класса
      return newState;
    });

    // Сбрасываем состояние всех открытых предметов и разделов при переключении класса
    setOpenTopics({});
    setOpenSections({});
  };

  const toggleTopic = (topicKey) => {
    setOpenTopics((prev) => ({
      ...prev,
      [topicKey]: !prev[topicKey], // Переключаем состояние текущего предмета
    }));

    // Сбрасываем состояние всех открытых разделов при переключении предмета
    setOpenSections({});
  };

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey], // Переключаем состояние текущего раздела
    }));
  };

  return (
    <div className="side-menu">
      <nav>
        <h2>Меню</h2>
        <ul>
          {/* Статические пункты меню */}
          <li>
            <Link to="/">Главная</Link>
          </li>

          {/* Динамически рендерящиеся классы */}
          {menuData.map((classItem) => (
            <li key={classItem.key}>
              <div
                className="toggle-button"
                onClick={() => toggleClass(classItem.key)}
              >
                {classItem.class} {openClasses[classItem.key] ? '▼' : '▶'}
              </div>
              {openClasses[classItem.key] && (
                <ul>
                  {classItem.subjects.map((subject) => (
                    <li key={subject.key}>
                      <div
                        className="toggle-button"
                        onClick={() => toggleTopic(subject.key)}
                      >
                        {subject.name} {openTopics[subject.key] ? '▼' : '▶'}
                      </div>
                      {openTopics[subject.key] && (
                        <ul>
                          {subject.topics.map((topic) => (
                            <li key={topic.key}>
                              <div
                                className="toggle-button"
                                onClick={() => toggleSection(topic.key)}
                              >
                                {topic.name} {openSections[topic.key] ? '▼' : '▶'}
                              </div>
                              {openSections[topic.key] && (
                                <ul>
                                  {topic.subtopics.map((subtopic, index) => (
                                    <li key={index}>
                                      <Link to={subtopic.path}>{subtopic.name}</Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link to="/about">О нас</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;