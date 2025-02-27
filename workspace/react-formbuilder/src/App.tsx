import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormBuilder from './builders/FormBuilder';

function App() {
  let elements = new FormBuilder()
    .input({"label": "Name"})
    .input({"label": "Email"})
    .checkbox({"label": "I agree to the terms and conditions"})
    .build();

  return (
    <div className="App">
      {elements}
    </div>
  );
}

export default App;
