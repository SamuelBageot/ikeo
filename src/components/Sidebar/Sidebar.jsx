import { useEffect, useState } from "react";
import { formatPrice } from '../../utils';
import { FaCheck } from 'react-icons/fa';
import * as S from './styles';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productsActions } from "../../store/productsSlice";

const Sidebar = () => {

    const { products } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const initialSearchFilters = {
        categories: ["all"],
        colors: ["all"],
        companies: ["all"],
        prices: []
    };

    const initialUserFilters = {
        search: "",
        category: "all",
        colors: "all",
        company: "all",
        price: "",
        shipping: false
    };

    const [searchFilters, setSearchFilters] = useState(initialSearchFilters);
    const [userFilters, setUserFilters] = useState(initialUserFilters);
    const [maxPrice, setMaxPrice] = useState("");

    useEffect(() => {
        if (products.length) {
            defineSearchFilters(products);
        } else {
            console.log("No products found");
        }
    }, [products]);

    useEffect(() => {
        const { search, category, company, colors, price, shipping } = userFilters;
        const productFilter = products.filter(product =>
            (search === "" ? product : product.name.startsWith(search)) &&
            (category === "all" ? product : product.category === category) &&
            (company === "all" ? product : product.company === company) &&
            (colors === "all" ? product : product.colors.includes(colors)) &&
            (price >= product.price ? product : product.price <= price) &&
            (!shipping ? product : product.shipping)
        );
        dispatch(productsActions.updateFilteredProducts(productFilter));
    }, [userFilters]);

    const defineSearchFilters = prods => {
        const filters = { ...initialSearchFilters };
        prods.forEach(product => {
            filters.categories.push(product.category);
            filters.companies.push(product.company);
            product.colors.forEach(color => filters.colors.push(color));
            filters.prices.push(product.price);
        })
        filters.categories = [...new Set(filters.categories)];
        filters.companies = [...new Set(filters.companies)];
        filters.colors = [...new Set(filters.colors)];
        const maxPrice = Math.max(...filters.prices);
        setSearchFilters(filters);
        setMaxPrice(maxPrice);
        setUserFilters({ ...initialUserFilters, price: maxPrice });
    };

    const defineUserFilters = e => {
        const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUserFilters({ ...userFilters, [e.target.name]: val });
    };

    const clearFilters = () => setUserFilters({ ...initialUserFilters, price: maxPrice });

    return (
        <div>
            <form action="" onSubmit={e => e.preventDefault()}>
                <S.SearchInput name="search" type="text" placeholder="Search" />
            </form>
            <div>
                <h5>Category</h5>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {searchFilters.categories?.map(category => <button key={Math.random()} name="category" value={category} onClick={defineUserFilters}>{category}</button>)}
                </div>
            </div>
            <div>
                <h5>Colors</h5>
                {searchFilters?.colors.map(color => <button key={Math.random()} name="colors" value={color} onClick={defineUserFilters} style={{ opacity: color === userFilters.colors ? "1" : ".45", border: "none", textTransform: "capitalize", display: "inline-block", backgroundColor: color, height: "17px", width: "17px", cursor: "pointer", borderRadius: color !== "all" && "50px" }}>{color === "all" && color || (userFilters.colors === color && <FaCheck style={{ fill: "white", height: "8px" }} />)}</button>)}
            </div>
            <div>
                <h5>Company</h5>
                <select name="company" id="" value={userFilters.company} onChange={defineUserFilters}>
                    {searchFilters?.companies.map(company => <option key={Math.random()}>{company}</option>)}
                </select>
            </div>
            <div>
                <h5>Price</h5>
                <p>{formatPrice(userFilters.price)}</p>
                <input type="range" min="0" max={Math.max(...searchFilters?.prices)} step="1" value={userFilters.price} onChange={defineUserFilters} name="price" />
            </div>
            <div>
                <label htmlFor="shipping">Free Shipping</label>
                <input type="checkbox" id="shipping" name="shipping" checked={userFilters.shipping} onChange={defineUserFilters} />
            </div>
            <button onClick={clearFilters} style={{ cursor: "pointer" }}>Clear Filters</button>
        </div>
    )
};

export default Sidebar;