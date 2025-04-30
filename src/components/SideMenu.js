import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuData from './menuData';
import './SideMenu.css';

function SideMenu() {
  const location = useLocation();
  const [openStates, setOpenStates] = useState({
    classes: {},
    topics: {},
    sections: {}
  });
  const [activePath, setActivePath] = useState({
    class: null,
    subject: null,
    topic: null
  });

  const isActiveLink = (path) => location.pathname === path;

  useEffect(() => {
        const currentPath = location.pathname;

    // Если это "О нас", сбрасываем всё
    if (currentPath === '/about') {
      setOpenStates({
        classes: {},
        topics: {},
        sections: {}
      });
      setActivePath({
        class: null,
        subject: null,
        topic: null
      });
      return;
    }

    let foundClassKey = null;
    let foundSubjectKey = null;
    let foundTopicKey = null;
  
    let found = false;
  
    for (const classItem of menuData) {
      for (const subject of classItem.subjects) {
        for (const topic of subject.topics) {
          for (const subtopic of topic.subtopics) {
            if (subtopic.path === location.pathname) {
              foundClassKey = classItem.key;
              foundSubjectKey = subject.key;
              foundTopicKey = topic.key;
              found = true;
              break;
            }
          }
          if (found) break;
        }
        if (found) break;
      }
      if (found) break;
    }
  
    if (foundClassKey && foundSubjectKey && foundTopicKey) {
      setOpenStates({
        classes: { [foundClassKey]: true },
        topics: { [foundSubjectKey]: true },
        sections: { [foundTopicKey]: true }
      });
  
      setActivePath({
        class: foundClassKey,
        subject: foundSubjectKey,
        topic: foundTopicKey
      });
    }
  
  }, [location.pathname]);

  const handleHomeClick = () => {
    // Сбрасываем все состояния при клике на "Главную"
    setOpenStates({
      classes: {},
      topics: {},
      sections: {}
    });
    setActivePath({
      class: null,
      subject: null,
      topic: null
    });
  };

  const toggleClass = (classKey) => {
    const isOpening = !openStates.classes[classKey];
    
    setOpenStates({
      classes: { [classKey]: isOpening },
      topics: {},
      sections: {}
    });

    setActivePath({
      class: isOpening ? classKey : null,
      subject: null,
      topic: null
    });
  };

  const toggleTopic = (subjectKey, classKey) => {
    const isOpening = !openStates.topics[subjectKey];
    
    setOpenStates(prev => ({
      classes: prev.classes,
      topics: { [subjectKey]: isOpening },
      sections: {}
    }));

    setActivePath({
      class: classKey,
      subject: isOpening ? subjectKey : null,
      topic: null
    });
  };

  const toggleSection = (topicKey, subjectKey, classKey) => {
    const isOpening = !openStates.sections[topicKey];
    
    setOpenStates(prev => ({
      classes: prev.classes,
      topics: prev.topics,
      sections: { [topicKey]: isOpening }
    }));

    setActivePath({
      class: classKey,
      subject: subjectKey,
      topic: isOpening ? topicKey : null
    });
  };

  const isActive = (level, key) => activePath[level] === key;

  return (
    <div className="side-menu">
      <nav>
        <h2>Меню</h2>
        <ul>
          <li>
            <Link 
              to="/" 
              className={`menu-item ${isActiveLink('/') ? 'active' : ''}`} 
              onClick={handleHomeClick}
            >
              Главная
            </Link>
          </li>

          {menuData.map((classItem) => (
            <li key={classItem.key}>
              <div 
                className={`menu-item class-item ${isActive('class', classItem.key) ? 'active' : ''}`}
                onClick={() => toggleClass(classItem.key)}
              >
                {classItem.class} <span className="arrow">{openStates.classes[classItem.key] ? '▼' : '▶'}</span>
              </div>
              
              {openStates.classes[classItem.key] && (
                <ul className="subject-list">
                  {classItem.subjects.map((subject) => (
                    <li key={subject.key}>
                      <div 
                        className={`menu-item subject-item ${isActive('subject', subject.key) ? 'active' : ''}`}
                        onClick={() => toggleTopic(subject.key, classItem.key)}
                      >
                        {subject.name} <span className="arrow">{openStates.topics[subject.key] ? '▼' : '▶'}</span>
                      </div>
                      
                      {openStates.topics[subject.key] && (
                        <ul className="topic-list">
                          {subject.topics.map((topic) => (
                            <li key={topic.key}>
                              <div 
                                className={`menu-item topic-item ${isActive('topic', topic.key) ? 'active' : ''}`}
                                onClick={() => toggleSection(topic.key, subject.key, classItem.key)}
                              >
                                <span className="topic-name">{topic.name}</span> <span className="arrow">{openStates.sections[topic.key] ? '▼' : '▶'}</span>
                              </div>
                              
                              {openStates.sections[topic.key] && (
                                <ul className="subtopic-list">
                                  {topic.subtopics.map((subtopic, index) => (
                                    <li key={index}>
                                      <Link 
                                        to={subtopic.path} 
                                        className={`subtopic-link ${isActiveLink(subtopic.path) ? 'active' : ''}`}
                                      >
                                        {subtopic.name}
                                      </Link>
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
            <Link to="/about" className={isActiveLink('/about') ? 'active' : ''}>О нас</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;