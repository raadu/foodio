// Title: ProductDetails Component
// Details: Details about a product. Opens inside a modal.
// Author: raadu
// Date: 18 March 2021, 12:40AM

// Dependencies
import { Fragment } from "react";
import formatCurrency from "../../../utilities/util";
import ProductDetailsStyle from "./ProductDetails.module.scss";

// Dummy Food Image
const dummyFoodImage = "/images/dummy-food.jpg";

const ProductDetails = ({ selectedProduct, closeModal, addToCart }) => {
    // Image URL
    const imageUrl = selectedProduct.image !== "" ? selectedProduct.image : dummyFoodImage;

  return (
    <Fragment>
      <button className={ProductDetailsStyle.closeModal} onClick={closeModal}>
        x
      </button>
      <div className={ProductDetailsStyle.productDetails}>
        <img src={imageUrl} alt={selectedProduct.title}></img>
        <div className={ProductDetailsStyle.description}>
          <p>
            <strong>{selectedProduct.title}</strong>
          </p>
          <p>{selectedProduct.description}</p>
          <p>
            Type:{" "}
            {selectedProduct.cuisines.map((cuisineName) => (
              <span>
                {" "}
                <button 
                  className={ProductDetailsStyle.typeButton}
                  onClick={closeModal}
                >
                  {cuisineName}
                </button>
              </span>
            ))}
          </p>
          <div className={ProductDetailsStyle.productPrice}>
            <div className={ProductDetailsStyle.priceTag}>{formatCurrency(selectedProduct.price)}</div>
            <button
              className={`${ProductDetailsStyle.customButton} ${ProductDetailsStyle.primary}`}
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
