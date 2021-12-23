import * as S from './styles';
import { formatPrice } from '../../../../utils';

const FeaturedproductCard = ({ name, price, image: { formats: { small: { url: imgUrl } } } }) => {

    return (
        <S.Product>
            <S.ProductImg src={imgUrl} alt={name} />
            <S.ProductInfos>
                <S.ProductName>{name}</S.ProductName>
                <S.ProductPrice>{formatPrice(price)}</S.ProductPrice>
            </S.ProductInfos>
        </S.Product>
    )
};

export default FeaturedproductCard;