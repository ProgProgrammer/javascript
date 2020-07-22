import React from 'react';
import logo from './logo.svg';
import './App.css';

function AddText()
{
    return (
        <p>
            <span>Добро пожаловать в Реакт. </span>
            <a href="https://github.com/ProgProgrammer" class="text-url" target="_blank">ProgProgrammer</a>
        </p>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddText />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
