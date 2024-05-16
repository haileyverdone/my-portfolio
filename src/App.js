import React, { useState } from 'react';
import './styles/App.css';
import Header from './componets/Header';
import Introduction from './componets/Introduction';
import Skills from './componets/Skills';
import Projects from './componets/Projects';
import Contact from './componets/Contact';

function App() {
  const [view, setView] = useState('introduction');

  return (
    <div className="App">
      <Header setView={setView} />
      {view === 'introduction' && <Introduction />}
      {view === 'skills' && <Skills />}
      {view === 'projects' && <Projects />}
      {view === 'contact' && <Contact />}
    </div>
  );
}

export default App;
