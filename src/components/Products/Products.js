import { useState } from "react";
import Modal from "react-modal";
import { Zoom } from "react-reveal";
import Fade from "react-reveal/Fade";
import formatCurrency from "../../utilities/util";

const Products = ({ products, addToCart, fetchProducts }) => {
  // State
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Dummy Food Image
  const dummyFoodImage = "/images/dummy-food.jpg";

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
      <Fade bottom cascade={true}>
      {!products ? (
        <div>Loading...</div>
      ) : (
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id} onClick={() => openModal(product)}>
                  <img
                    src={product.image !== "" ? product.image : dummyFoodImage}
                    alt={product.title}
                  />
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    onClick={() => addToCart(product)}
                    className="button primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      </Fade>
      {modalOpen && selectedProduct && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
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
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Products;
