import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import ErrorPage from "../../pages/404/404";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Products/Product/Product";
import Products from "../../pages/Products/Products";
import { fetchProducts } from "../../store/productsSlice";
import Layout from "../UI/Layout/Layout";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

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