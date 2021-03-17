// Title: Filter Component
// Details: Component for filtering products.
// Author: raadu
// Date: 17 March 2021, 11:56PM

// Dependencies
import FilterStyle from "./Filter.module.scss";

const Filter = ({
    count, 
    cuisine, 
    sort, 
    sortProducts, 
    filterProducts
}) => {
    return (
        <div className={FilterStyle.filter}>
            <div>
                {count} Products
            </div>
            <div>
                Order By{" "}
                <select value={sort} onChange={sortProducts}>
                    <option value="Latest" defaultValue>Latest</option>
                    <option value="Lowest">Lowest Price</option>
                    <option value="Highest">Highest Price</option>
                </select>
            </div>
            <div>
                Filter Cuisines{" "}
                <select value={cuisine} onChange={filterProducts}>
                    <option value="" defaultValue>All</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Fast Food">Fast Food</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Rice Bowl">Rice Bowl</option>
                    <option value="Italian">Italian</option>
                    <option value="Thai">Thai</option>
                    <option value="Fish">Fish</option>
                    <option value="Burger">Burger</option>
                </select>
            </div>
        </div>
    );
}
 
export default Filter;