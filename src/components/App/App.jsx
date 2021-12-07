import { Route, Routes } from "react-router";
import Home from "../../pages/Home/Home";
import Layout from "../UI/Layout/Layout";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    )
};

export default App;