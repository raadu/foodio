// Title: App
// Details: Starting component for Food Delivery Application.
// Author: raadu
// Date: 16 March 2021, 9:15PM

// Dependencies
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Products from "./components/Products/Products";
import data from './data/productList.json';
import Header from './Header/Header';


function App() {
  // Data
  const productDataInitial = data.products;
  const cachedCartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
  
  // States
  const [products, setProducts] = useState(productDataInitial);
  const [cuisine, setCuisine] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState(cachedCartItems);

  // Sort Product Function
  const sortProducts = (event) => {
    const sortValue = event.target.value;
    setSort(sortValue);

    // Product Sorting 
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
      setCuisine(event.target.value);
      setProducts(data.products);
    }
    else {
        setCuisine(event.target.value);
        // Product Filtering
        const filteredProducts = data.products.filter((product) => 
          product.cuisines.indexOf(event.target.value) >= 0
        );
        setProducts(filteredProducts);
    }
  }

  // Add To Cart Function
  const addToCart = (product) => {
    const cartItemsCopy = [...cartItems];
    let alreadyInCart = false;

    cartItemsCopy.forEach((item) => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if(!alreadyInCart) {
      cartItemsCopy.push({
        ...product, 
        count: 1
      });
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
    alert("Order created for" + order.name);
  }

  return (
    <div className="grid-container">
      <Header 
        text="Foodio - Food Delivery Service"
      />
      <main>
        <div className="content">
          <div className="main">
            <Filter 
              count={products.length}
              cuisine={cuisine}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            {products.length > 0 ? 
              <Products
               products={products}
               addToCart={addToCart}
              /> :
              <NotFound message="No products found"/>
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
      <Footer
        text="raadu"
        link="https://github.com/raadu"
      />
    </div>
  );
}

export default App;
