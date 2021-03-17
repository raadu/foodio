// Title: SingleProduct Component
// Details: Component to render single product UI.
// Author: raadu
// Date: 18 March 2021, 12:30AM

// Dependencies
import { Fade } from "react-reveal";
import formatCurrency from '../../../utilities/util';

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
            <div className="product">
                <a href={"#" + product._id} onClick={() => openModal(product)}>
                    <img
                        src={imageUrl}
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
    </Fade>
  );
};

export default SingleProduct;
