import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Breadcrumb from "../../../components/UI/Breadcrumb/Breadcrumb";
import { formatPrice } from "../../../utils";
import * as S from './styles';

const Product = () => {

    const { productId } = useParams();
    // const { products } = useSelector(state => state.products);
    const [product, setProduct] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            const response = await fetch(`https://ikeo-production.herokuapp.com/products/${productId}`);
            const data = await response.json();
            setProduct(data);
            setIsLoading(false);
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

    let content;

    if (isLoading) {
        content = (
            <S.Wrapper>
                <S.Product>
                    <S.BackLink to={"/products"}>Back to products</S.BackLink>
                    <h1>LOADING...</h1>
                </S.Product>
            </S.Wrapper>
        )
    } else {
        content = (
            <S.Wrapper>
                <S.Product>
                    <S.BackLink to={"/products"}>Back to products</S.BackLink>
                    <div style={{ border: "1px solid blue", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={product?.image?.formats.medium.url} style={{ border: "1px solid red", width: "50%", marginRight: "2rem", borderRadius: "5px" }} />
                        <div style={{ flex: 1 }}>
                            <S.ProductName>{product.name}</S.ProductName>
                            <S.ProductPrice>{formatPrice(product.price)}</S.ProductPrice>
                            <S.ProductDescription>{product.description}</S.ProductDescription>
                        </div>
                    </div>
                </S.Product>
            </S.Wrapper>
        )
    }

    return (
        <>
            <Breadcrumb productName={product.name || ' '} />
            {content}
        </>
    )
};

export default Product;