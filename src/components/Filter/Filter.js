const Filter = ({count, size, sort, sortProducts, filterProducts}) => {
    return (
        <div className="filter">
            <div className="filter-result">
                {count} Products
            </div>
            <div className="filter-sort">
                Order By{" "}
                <select value={sort} onChange={sortProducts}>
                    <option value="Latest" defaultValue>Latest</option>
                    <option value="Lowest">Lowest Price</option>
                    <option value="Highest">Highest Price</option>
                </select>
            </div>
            <div className="filter-size">
                Filter Cuisines{" "}
                <select value={size} onChange={filterProducts}>
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