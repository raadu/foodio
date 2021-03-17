// Title: Products Component
// Details: Component for rendering products list.
// Author: raadu
// Date: 18 March 2021, 12:17AM

// Dependencies
import { useState } from "react";
import Modal from "react-modal";
import { Zoom } from "react-reveal";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductsStyle from "./Products.module.scss";
import SingleProduct from "./SingleProduct/SingleProduct";

const Products = ({ products, addToCart }) => {
  // States
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Open Modal Function
  const openModal = (product) => {
    setModalOpen(true);
    setSelectedProduct(product);
  };

  // Close Modal Function
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
        <ul className={ProductsStyle.products}>
          {products.map((product) => (
            <SingleProduct
              product={product}
              openModal={openModal}
              addToCart={addToCart}
            />
          ))}
        </ul>
      {modalOpen && selectedProduct && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <ProductDetails
              selectedProduct={selectedProduct}
              closeModal={closeModal}
              addToCart={addToCart}
            />
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Products;
