import React from "react";


const Header = ({ setView }) => (
    <header className="App-header">
      <h1>My Portfolio</h1>
      <nav>
        {/* Make button for each seperate tabs */}
        <ul>
          <li><button onClick={() => setView('introduction')}>About Me</button></li>
          <li><button onClick={() => setView('skills')}>Skills</button></li>
          <li><button onClick={() => setView('projects')}>Projects</button></li>
          <li><button onClick={() => setView('contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );

export default Header;

