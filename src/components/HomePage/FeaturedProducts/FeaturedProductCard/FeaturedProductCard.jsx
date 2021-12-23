import * as S from './styles';
import { formatPrice } from '../../../../utils';

const FeaturedproductCard = ({ id, name, price, image: { formats: { small: { url: imgUrl } } } }) => {

    return (
        <S.Product to={`/products/${id}`}>
            <S.ProductImgContainer>
                <S.ProductImg src={imgUrl} alt={name} />
            </S.ProductImgContainer>
            <S.ProductInfos>
                <S.ProductName>{name}</S.ProductName>
                <S.ProductPrice>{formatPrice(price)}</S.ProductPrice>
            </S.ProductInfos>
        </S.Product>
    )
};

export default FeaturedproductCard;