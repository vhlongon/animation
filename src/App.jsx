import React from 'react';
import Repo from './Repo';
import './App.css';

const repos = [
  { name: 'Velocity-react', url: 'google-fabric/velocity-react' },
  { name: 'GSAP', url: 'azazdeaz/react-gsap-enhancer' },
  { name: 'React motion', url: 'chenglou/react-motion' },
  { name: 'React Transition-group ', url: 'reactjs/react-transition-group' },
  { name: 'React Move', url: 'react-tools/react-move' },
  { name: 'React Spring', url: 'drcmda/react-spring' },
  { name: 'Popmotion', url: 'Popmotion/popmotion' },
];
const App = () => (
  <div className="app">
    <header className="app-header">
      <h1 className="app-title">React animation libs</h1>
    </header>
    <div className="repos">{repos.map(props => <Repo {...props} key={props.name} />)}</div>
  </div>
);

export default App;
