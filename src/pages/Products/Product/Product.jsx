import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Breadcrumb from "../../../components/UI/Breadcrumb/Breadcrumb";
import { formatPrice } from "../../../utils";
import * as S from './styles';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Backlink from "../../../components/UI/Backlink/Backlink";

const Product = () => {

    const { productId } = useParams();
    // const { products } = useSelector(state => state.products);
    const { searchFilters } = useSelector(state => state.searchFilters);
    const [product, setProduct] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [activeColor, setActiveColor] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            const response = await fetch(`https://ikeo-production.herokuapp.com/products/${productId}`);
            const data = await response.json();
            setProduct(data);
            setActiveColor(data.colors[0]);
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

    const addQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity => quantity + 1);
        }
    }

    const removeQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity => quantity - 1);
        }
    }

    let content;

    if (isLoading) {
        content = (
            <S.Wrapper>
                <S.Product>
                    <Backlink>Back to products</Backlink>
                    <h1>LOADING...</h1>
                </S.Product>
            </S.Wrapper>
        )
    } else {
        const productStockValues = [];
        for (let i = 0; i < product.stock; i++) {
            productStockValues.push(i + 1);
        }
        content = (
            <S.Wrapper>
                <S.Product>
                    <Backlink>Back to products</Backlink>
                    <S.Content>
                        <S.Images>
                            <img src={product?.image?.formats.medium.url} />
                        </S.Images>
                        <S.ProductInfos>
                            <S.ProductName>{product.name}</S.ProductName>
                            <S.ProductPrice>{formatPrice(product.price)}</S.ProductPrice>
                            <S.ProductDescription>{product.description}</S.ProductDescription>
                            <S.ProductCompany>Company : {product.company}</S.ProductCompany>

                            <hr style={{ margin: "1.5rem 0" }} />

                            <div style={{ display: "flex", marginBottom: "1.5rem" }}>Colors : {product?.colors?.map(color => <div key={color} onClick={() => setActiveColor(color)} style={{ backgroundColor: color, opacity: `${activeColor !== color ? .65 : 1}`, display: "flex", justifyContent: "center", alignItems: "center", marginLeft: ".5rem", cursor: "pointer", height: "25px", width: "25px", borderRadius: "50%" }}>{activeColor === color && <FaCheck style={{ fill: "white", fontSize: ".85rem" }} />}</div>)}</div>
                            <S.CartActions>
                                <S.Quantity>
                                    <AiOutlineMinus onClick={removeQuantity} />
                                    <S.QuantityText>{quantity}</S.QuantityText>
                                    <AiOutlinePlus onClick={addQuantity} />
                                </S.Quantity>
                                <S.CartBtn disabled={product.stock < 1} onClick={() => console.log(quantity)}>{product.stock > 0 ? "Add to cart" : "Out of stock"}</S.CartBtn>
                            </S.CartActions>
                        </S.ProductInfos>
                    </S.Content>
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