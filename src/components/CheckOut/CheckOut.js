// Title: CheckOut component
// Details: Form for checking out an order.
// Author: raadu
// Date: 18 March 2021, 1:36AM

// Dependencies
import { useForm } from "react-hook-form";
import { Fade } from 'react-reveal';

const CheckOut = ({ cartItems, createOrder }) => {
  // useForm handler
  const { register, handleSubmit } = useForm();

  // onSubmit Function
  const onSubmit = (data) => {
    const orderInfo = {
      ...data,
      cartItems,
    };
    createOrder(orderInfo);
  };

  return (
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
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
            </li>
            <li>
              <label>Name</label>
              <input
                name="name"
                type="text"
                required
                ref={register({ required: true, maxLength: 80 })}
              />
            </li>
            <li>
              <label>Address</label>
              <input
                name="address"
                type="text"
                required
                ref={register({ required: true, maxLength: 80 })}
              />
            </li>
            <li>
              <button className="button primary" type="submit">
                Checkout
              </button>
            </li>
          </ul>
        </form>
      </div>
    </Fade>
  );
};

export default CheckOut;
