import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";
import { Wrapper } from "./styles";
import { formatPrice } from "../../utils";
import { Link } from "react-router-dom";

const Products = () => {

    const { filteredProducts } = useSelector(state => state.products);

    if (filteredProducts.length) {
        return (
            <>
                <Breadcrumb />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Wrapper>
                        <Sidebar />
                        <div style={{ flex: 1, padding: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", alignItems: "start" }}>
                            {filteredProducts.map(product => {
                                return (
                                    <Link to={`/products/${product.id}`} key={product.id} style={{ textDecoration: "none", color: "inherit" }} >
                                        <img src={product.image.formats.small.url} alt={product.name} style={{ borderRadius: "8px", width: "100%", display: "block", height: "200px", objectFit: "cover" }} />
                                        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
                                            <h1>{product.name}</h1>
                                            <p>{formatPrice(product.price)}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </Wrapper>
                </div>
            </>
        )
    }

    return (
        <>
            <Breadcrumb />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Wrapper>
                    <Sidebar />
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>Sorry, no product match your search</p>
                    </div>
                </Wrapper>
            </div>
        </>
    )
};

export default Products;