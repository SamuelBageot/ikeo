import { Route, Routes } from "react-router";
import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";
import Layout from "../UI/Layout/Layout";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Layout>
    )
};

export default App;