import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";
import * as S from "./styles";
import { formatPrice } from "../../utils";
import { Link } from "react-router-dom";

const Products = () => {

    const { filteredProducts } = useSelector(state => state.products);

    if (filteredProducts.length) {
        return (
            <>
                <Breadcrumb />
                <S.Wrapper>
                    <S.Content>
                        <Sidebar />
                        <S.Products>
                            {filteredProducts.map(product => {
                                return (
                                    <S.ProductLink to={`/products/${product.id}`} key={product.id} style={{ textDecoration: "none", color: "inherit" }} >
                                        <S.ProductImg src={product.image.formats.small.url} alt={product.name} />
                                        <S.ProductInfos>
                                            <S.ProductTitle>{product.name}</S.ProductTitle>
                                            <S.ProductPrice>{formatPrice(product.price)}</S.ProductPrice>
                                        </S.ProductInfos>
                                    </S.ProductLink>
                                )
                            })}
                        </S.Products>
                    </S.Content>
                </S.Wrapper>
            </>
        )
    }

    return (
        <>
            <Breadcrumb />
            <S.Wrapper>
                <S.Content>
                    <Sidebar />
                    <S.NoProducts>
                        <S.NoProductsText>Sorry, no product match your search</S.NoProductsText>
                    </S.NoProducts>
                </S.Content>
            </S.Wrapper>
        </>
    )
};

export default Products;