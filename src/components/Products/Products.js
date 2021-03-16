import formatCurrency from "../../utilities/util";

const Products = ({products}) => {
    // Dummy Food Image
    const dummyFoodImage = '/images/dummy-food.jpg';

    return (
        <div>
            <ul className="products">
                {products.map(product => (
                    <li key={product._id}>
                        <div className="product">
                            <a href={"#"+product._id}>
                                <img src={product.image!=="" ? product.image : dummyFoodImage} alt={product.title}/>
                                <p>
                                    {product.title}
                                </p>
                            </a> 
                            <div className="product-price">
                                <div>
                                    {formatCurrency(product.price)}
                                </div>
                                <button className="button primary">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </li>
                ))

                }
            </ul>
        </div>
    );
}
 
export default Products;