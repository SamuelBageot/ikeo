import { useParams } from "react-router";
import Breadcrumb from "../../../components/UI/Breadcrumb/Breadcrumb";

const Product = () => {

    const { productId } = useParams();
    console.log(productId);

    return (
        <>
            <Breadcrumb />
            <h1>PRODUCT ID : {productId}</h1>
        </>
    )
};

export default Product;