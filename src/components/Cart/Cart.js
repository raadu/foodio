// Title: Cart Component
// Details: Displays added products to cart, total price, proceed button.
// Author: raadu
// Date: 18 March 2021, 1:26AM

// Depenedencies
import { useState } from "react";
import Fade from 'react-reveal/Fade';
import formatCurrency from "../../utilities/util";
import CheckOut from "../CheckOut/CheckOut";
import CartStyle from "./Cart.module.scss";

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
        <div className={`${CartStyle.cart} ${CartStyle.cartHeader}`}>Cart Is Empty</div>
      ) : (
        <div className={`${CartStyle.cart} ${CartStyle.cartHeader}`}>
          You have {cartItems.length} items in cart{" "}
        </div>
      )}
      <div>
      {/* Cart */}
        <div className={CartStyle.cart}>
          <Fade left cascade>
              <ul className={CartStyle.cartItems}>
                  {cartItems.map((item) => (
                  <li key={item._id} className={CartStyle.singleCard}>
                      <div>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div>
                      <div>{item.title}</div>
                      <div className={CartStyle.right}>
                          {formatCurrency(item.price)} X {item.count}{" "}
                          <button
                            className={CartStyle.removeButton}
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
            <div className={CartStyle.cart}>
              <div className={CartStyle.total}>
                <div>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button
                  className={CartStyle.proceedButton}
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
