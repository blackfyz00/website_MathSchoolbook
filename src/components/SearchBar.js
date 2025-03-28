import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import menuData from './menuData';
import './SearchBar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Функция поиска
  const handleSearch = (term) => {
    if (term.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchResults = [];
    
    menuData.forEach(classItem => {
      classItem.subjects.forEach(subject => {
        subject.topics.forEach(topic => {
          // Поиск по названию темы
          if (topic.name.toLowerCase().includes(term.toLowerCase())) {
            searchResults.push({
              type: 'topic',
              class: classItem.class,
              subject: subject.name,
              name: topic.name,
              path: topic.subtopics[0]?.path || '#'
            });
          }
          
          // Поиск по подтемам
          topic.subtopics.forEach(subtopic => {
            if (subtopic.name.toLowerCase().includes(term.toLowerCase())) {
              searchResults.push({
                type: 'subtopic',
                class: classItem.class,
                subject: subject.name,
                topic: topic.name,
                name: subtopic.name,
                path: subtopic.path
              });
            }
          });
        });
      });
    });

    setResults(searchResults);
    setIsOpen(searchResults.length > 0);
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="search-top-right">
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Поиск по темам..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm && setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        />
      </div>
      
      {isOpen && (
        <div className="search-results-dropdown">
          {results.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className="result-item"
              onClick={() => setIsOpen(false)}
            >
              <div className="result-class">{item.class}</div>
              <div className="result-section">{item.subject}</div>
              <div className="result-topic">
                {item.type === 'topic' ? item.name : `${item.topic} › ${item.name}`}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;