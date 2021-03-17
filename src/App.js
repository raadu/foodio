// Title: Food Delivery App 
// Details: Food delivery web application created with React.
// Author: raadu
// Date: 16 March 2021, 9:15PM

import { useState } from 'react';
import Filter from './components/Filter/Filter';
import Products from "./components/Products/Products";
import data from './data/productList.json';

// Dependencies

function App() {
  // State
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  // Sort Product
  const sortProducts = (event) => {
    const sortValue = event.target.value;
    setSort(sortValue);
    const sortedProducts = products.slice().sort((a,b) => (
      sortValue === "Lowest" ?
      a.price - b.price :
      sortValue === "Highest" ? 
      b.price - a.price :
      sortValue === "Latest" ?
      b._id - a._id :
      b._id - a._id
    ));
    setProducts(sortedProducts);
  }

  // Filter Product
  const filterProducts = (event) => {
    if(event.target.value === "") {
      setSize(event.target.value);
      setProducts(data.products);
    }
    else {
        setSize(event.target.value);
        const filteredProducts = data.products.filter((product) => 
          product.cuisines.indexOf(event.target.value) >= 0
        );
        setProducts(filteredProducts);
    }
  }

  return (
    <div className="grid-container">
      <header>
        <a href="/">Food Delivery App</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter 
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            {products.length > 0 ? 
              <Products
               products={products}
              /> :
              <div>No products found</div>
            }
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
