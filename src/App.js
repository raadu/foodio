// Title: Food Delivery App 
// Details: Food delivery web application created with React.
// Author: raadu
// Date: 16 March 2021, 9:15PM

import { useState } from 'react';
import Products from "./components/Products/Products";
import data from './data/productList.json';

// Dependencies

function App() {
  // State
  const [products, setProducts] = useState(data.products);

  return (
    <div className="grid-container">
      <header>
        <a href="/">Food Delivery App</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products
              products={products}
            />
          </div>
          <div className="sidebar">
            Cart Items
          </div>
        </div>
      </main>
      <footer>
        All rights is reserved
      </footer>
    </div>
  );
}

export default App;
