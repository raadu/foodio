import { useState } from "react";
import { useForm } from 'react-hook-form';
import Fade from 'react-reveal/Fade';
import formatCurrency from "../../utilities/util";

const Cart = ({ cartItems, removeFromCart, createOrder }) => {
    // State
    const [showCheckout, setShowCheckout] = useState(false);
    
    // useForm handler 
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        const orderInfo = {
            ...data,
            cartItems
        }
        createOrder(orderInfo);
    }

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart Is Empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} items in cart{" "}
        </div>
      )}
      <div>
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
            {showCheckout && (
                <Fade right cascade>
                    <div className="cart">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <ul className="form-container">
                        <li>
                        <label>Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            ref={register({required: true, pattern: /^\S+@\S+$/i})}
                            // onChange={handleInput}
                        />
                        </li>
                        <li>
                        <label>Name</label>
                        <input
                            name="name"
                            type="text"
                            required
                            ref={register({required: true, maxLength: 80})}
                            // onChange={handleInput}
                        />
                        </li>
                        <li>
                        <label>Address</label>
                        <input
                            name="address"
                            type="text"
                            required
                            ref={register({required: true, maxLength: 80})}
                            // onChange={handleInput}
                        />
                        </li>
                        <li>
                        <button 
                            className="button primary" 
                            type="submit"
                        >
                            Checkout
                        </button>
                        </li>
                    </ul>
                    </form>
                </div>
                </Fade>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
