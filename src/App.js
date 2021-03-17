// Title: Food Delivery App 
// Details: Food delivery web application created with React.
// Author: raadu
// Date: 16 March 2021, 9:15PM

import { useState } from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart/Cart';
import Filter from './components/Filter/Filter';
import Products from "./components/Products/Products";
import data from './data/productList.json';
import store from './redux/store';

// Dependencies

function App() {
  // State
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []);

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

  // Add To Cart Function
  const addToCart = (product) => {
    const cartItemsCopy = [...cartItems]; //confusions
    let alreadyInCart = false;

    cartItemsCopy.forEach((item) => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if(!alreadyInCart) {
      cartItemsCopy.push({...product, count: 1});
    }

    setCartItems(cartItemsCopy);

    // Set value to LocalStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItemsCopy));
  }

  // Remove from cart function
  const removeFromCart = (product) => {
    const cartItemsCopy = [...cartItems];

    const filteredProduct = cartItemsCopy.filter(x => x._id !== product._id);
    setCartItems(filteredProduct);

    // Set value to LocalStorage
    localStorage.setItem("cartItems", JSON.stringify(filteredProduct));
  }

  // Create order function
  const createOrder = (order) => {
    alert("Need to save order for " + order.name);
  }

  return (
    <Provider store={store}>
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
                addToCart={addToCart}
                /> :
                <div>No products found</div>
              }
            </div>
            <div className="sidebar">
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                createOrder={createOrder}
              />
            </div>
          </div>
        </main>
        <footer>
          All rights is reserved
        </footer>
      </div>
    </Provider>
  );
}

export default App;
