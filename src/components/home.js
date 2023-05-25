import React, { useState } from 'react';
import '../App.css';
import Section from './section'
import { sectionsData } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Nav from './nav';


function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredSections = sectionsData.filter((section) => {
    return section.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="App">
      <Nav />
      <header></header>
      <div className="search-bar">
        <div className='search-input-container'>
        <input
          type="text"
          placeholder="Search Show Titles"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ paddingLeft: '25px' }}
        />
        <FontAwesomeIcon icon={faSearch} className='search-icon' style={{ color: "#ffffff" }} />
        </div>
      </div>

      {filteredSections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          imageUrl={section.imageUrl}
          location={<span className='address-link'><a href={section.location} >{section.address}</a></span>}
          website={section.website}
          code={section.code}
        />
      ))}
    </div>

  );
}

export default Home;
