import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";
import { Wrapper } from "./styles";

const Products = () => {

    const { filteredProducts } = useSelector(state => state.products);

    return (
        <>
            <Breadcrumb />
            <Wrapper>
                <Sidebar />
                <div style={{ height: "500px", width: "var(--max-width)", border: "1px solid blue" }}>
                    {filteredProducts.map(product => {
                        return (
                            <article key={product.id}>{product.name}</article>
                        )
                    })}
                </div>
            </Wrapper>
        </>
    )
};

export default Products;