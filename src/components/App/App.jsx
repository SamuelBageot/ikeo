import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import ErrorPage from "../../pages/404/404";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Products/Product/Product";
import Products from "../../pages/Products/Products";
import { fetchProducts, productsActions } from "../../store/productsSlice";
import { searchFiltersActions } from "../../store/searchFiltersSlice";
import Layout from "../UI/Layout/Layout";

const App = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const { userFilters } = useSelector(state => state.searchFilters);

    const initialSearchFilters = {
        categories: ["all"],
        colors: ["all"],
        companies: ["all"],
        prices: []
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    useEffect(() => {
        if (products.length) {
            defineSearchFilters(products);
            console.log("Define search");
        } else {
            console.log("No products found");
        }
    }, [products]);

    useEffect(() => {
        const { search, category, company, colors, price, shipping } = userFilters;
        const productFilter = products.filter(product =>
            (search === "" ? product : product.name.toLowerCase().includes(search)) &&
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
        dispatch(searchFiltersActions.setSearchFilters(filters));
        dispatch(searchFiltersActions.setMaxPrice(maxPrice));
        dispatch(searchFiltersActions.firstSetUserFilters(maxPrice));
    };

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:productId" element={<Product />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Layout>
    )
};

export default App;