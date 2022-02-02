import React, { useState } from 'react';
import './App.css';

function App() {
  const [ markdown, setMarkdown ] = useState('# suppppp');

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />
      <div className="preview">{markdown}</div>
    </div>
  );
}

export default App;
