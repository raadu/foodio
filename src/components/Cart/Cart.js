// Title: Cart Component
// Details: Displays added products to cart, total price, proceed button.
// Author: raadu
// Date: 18 March 2021, 1:26AM

// Depenedencies
import { useState } from "react";
import Fade from 'react-reveal/Fade';
import formatCurrency from "../../utilities/util";
import CheckOut from "../CheckOut/CheckOut";

const Cart = ({ 
  cartItems, 
  removeFromCart, 
  createOrder 
}) => {
    // States
    const [showCheckout, setShowCheckout] = useState(false);
    
  return (
    <div>
      {/* Cart Header */}
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart Is Empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} items in cart{" "}
        </div>
      )}
      <div>
      {/* Cart */}
        <div className="cart">
          <Fade left cascade>
              <ul className="cart-items">
                  {cartItems.map((item) => (
                  <li key={item._id}>
                      <div>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div>
                      <div>{item.title}</div>
                      <div className="right">
                          {formatCurrency(item.price)} X {item.count}{" "}
                          <button
                            className="button"
                            onClick={() => removeFromCart(item)}
                          >
                            Remove
                          </button>
                      </div>
                      </div>
                  </li>
                  ))}
              </ul>
          </Fade>
        </div>
        {cartItems.length !== 0 && (
          <div>
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button
                  className="button primary"
                  onClick={() => setShowCheckout(true)}
                >
                  Proceed
                </button>
              </div>
            </div>
            {/* Checkout Form */}
            {showCheckout && (
                <CheckOut
                  cartItems={cartItems}
                  createOrder={createOrder}
                />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
