import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form/form.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form/>
    </div>
  );
}

export default App;
