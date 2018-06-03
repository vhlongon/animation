import React from 'react';
import Repo from './Repo';
import reposData from './data.json';
import './App.css';

const App = () => (
  <div className="app">
    <header className="app-header">
      <h1 className="app-title">React animation libs</h1>
    </header>
    <div className="repos">{reposData.map(data => <Repo {...data} key={data.name} />)}</div>
  </div>
);

export default App;
