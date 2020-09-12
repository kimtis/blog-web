import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [healthy, setHealthy] = React.useState("READY");
  React.useEffect(() => {
    fetch("http://3.35.51.163:8080/api/-/healthy")
      .then(resp => resp.text())
      .then(resp => setHealthy(resp));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, {healthy}
        </a>
      </header>
    </div>
  );
}

export default App;
