import React from 'react';
import { Counter } from './features/counter/Counter';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
     <Counter/>
     <Button variant="primary">Button #1</Button>
    </div>
  );
}

export default App;
