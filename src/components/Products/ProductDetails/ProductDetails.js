// Title: ProductDetails Component
// Details: Details about a product. Opens inside a modal.
// Author: raadu
// Date: 18 March 2021, 12:40AM

// Dependencies
import { Fragment } from "react";
import formatCurrency from "../../../utilities/util";

const ProductDetails = ({ selectedProduct, closeModal, addToCart }) => {
  return (
    <Fragment>
      <button className="close-modal" onClick={closeModal}>
        x
      </button>
      <div className="product-details">
        <img src={selectedProduct.image} alt={selectedProduct.title}></img>
        <div className="product-details-description">
          <p>
            <strong>{selectedProduct.title}</strong>
          </p>
          <p>{selectedProduct.description}</p>
          <p>
            Type:{" "}
            {selectedProduct.cuisines.map((x) => (
              <span>
                {" "}
                <button className="button">{x}</button>
              </span>
            ))}
          </p>
          <div className="product-price">
            <div>{formatCurrency(selectedProduct.price)}</div>
            <button
              className="button primary"
              onClick={() => {
                addToCart(selectedProduct);
                closeModal();
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
