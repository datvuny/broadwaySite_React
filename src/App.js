import React, { useState } from 'react';
import './App.css';
import Section from './components/section.js'
import Nav from './components/nav.js'
import {sectionsData} from './components/data.js'

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredSections = sectionsData.filter((section) => {
    return section.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="App">
      <Nav/>
      <header></header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a Show..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
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

export default App;
