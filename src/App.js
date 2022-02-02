import React, { useState } from 'react';
import './App.css';

function App() {
  const [ markdown, setMarkdown ] = useState('# suppppp');

  return (
    <div className="app">
      <textarea onChange={(e) => setMarkdown(e.target.value)} value={markdown} />
      <div className="preview">{markdown}</div>
    </div>
  );
}

export default App;
