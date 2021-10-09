import ProductList from './features/productList/ProductList';
import './App.css';
import Filter from './features/filter/Filter';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Checkout from './features/checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg" fixed="top">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="/">
              <Link to="/checkout">Cart</Link>
            </Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <>
              <Filter />
              <ProductList />
            </>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
