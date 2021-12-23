import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Breadcrumb from "../../../components/UI/Breadcrumb/Breadcrumb";

const Product = () => {

    const { productId } = useParams();
    const { products } = useSelector(state => state.products);
    const [product, setProduct] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://ikeo-production.herokuapp.com/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, []);

    // useEffect(() => {
    //     if (products.length) {
    //         console.log(products);
    //         const selectedProduct = products.filter(product => product.id === Number(productId))[0];
    //         console.log(selectedProduct);
    //         setProduct(selectedProduct);
    //     }
    // }, [products]);

    return (
        <>
            <Breadcrumb productName={product.name || ' '} />
            <h1>PRODUCT ID : {productId}</h1>
        </>
    )
};

export default Product;