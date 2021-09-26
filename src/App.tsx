import React from 'react';
import { Counter } from './features/counter/Counter';
import ProductList from './features/productList/ProductList';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Button variant="primary">Button #1</Button>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
