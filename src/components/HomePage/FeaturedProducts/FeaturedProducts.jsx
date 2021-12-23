import { useSelector } from 'react-redux';
import Separator from '../../UI/Separator/Separator';
import FeaturedproductCard from './FeaturedProductCard/FeaturedProductCard';
import * as S from './styles';

const FeaturedProducts = () => {

    const { products } = useSelector(state => state.products);

    // const products = [{ name: "product name", price: 12450, image: '/images/sofa.jpg' }, { name: "product name", price: 12450, image: '/images/sofa.jpg' }, { name: "product name", price: 12450, image: '/images/sofa.jpg' }];

    return (
        <S.Wrapper>
            <S.FeaturedProducts>
                <S.Title>Featured Products</S.Title>
                <Separator />
                <S.Products>
                    {products.slice(0, 3).map(product => <FeaturedproductCard key={Math.random()} {...product} />)}
                </S.Products>
                <S.Btn to="/products">ALL PRODUCTS</S.Btn>
            </S.FeaturedProducts>
        </S.Wrapper>
    )
};

export default FeaturedProducts;