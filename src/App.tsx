import ProductList from './features/productList/ProductList';
import './App.css';
import Filter from './features/filter/Filter';
import Cart from './features/cart/Cart';

function App() {
  return (
    <div className="App">
      <Filter />
      <ProductList />
    </div>
  );  
}

export default App;
