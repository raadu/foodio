// Title: SingleProduct Component
// Details: Component to render single product UI.
// Author: raadu
// Date: 18 March 2021, 12:30AM

// Dependencies
import { Fade } from "react-reveal";
import formatCurrency from '../../../utilities/util';
import SingleProductStyle from "./SingleProduct.module.scss";

// Dummy Food Image
const dummyFoodImage = "/images/dummy-food.jpg";


const SingleProduct = ({ 
    product, 
    openModal, 
    addToCart 
}) => {
    // Image URL
    const imageUrl = product.image !== "" ? product.image : dummyFoodImage;
    
  return (
    <Fade bottom cascade>
        <li key={product._id}>
            <div className={SingleProductStyle.product}>
                <a href={"#" + product._id} onClick={() => openModal(product)}>
                    <img
                        src={imageUrl}
                        alt={product.title}
                    />
                    <div className={SingleProductStyle.productTitle}>{product.title}</div>
                </a>
                <div className={SingleProductStyle.productPrice}>
                <div>{formatCurrency(product.price)}</div>
                <button 
                    onClick={() => addToCart(product)} 
                    className={`${SingleProductStyle.customButton} ${SingleProductStyle.primary}`}
                >
                    Add To Cart
                </button>
                </div>
            </div>
        </li>
    </Fade>
  );
};

export default SingleProduct;
