import { useParams } from "react-router";

const Product = () => {

    const { productId } = useParams();
    console.log(productId);

    return (
        <div>
            <h1>PRODUCT ID : {productId}</h1>
        </div>
    )
};

export default Product;