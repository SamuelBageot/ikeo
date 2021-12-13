import * as S from './styles';
import {formatPrice} from '../../../../utils';

const FeaturedproductCard = ({ image, name, price, description, id, view }) => {
    return (
        <S.Product>
            <S.ProductImg src={image} alt={name} />
            <S.ProductInfos>
                <S.ProductName>{name}</S.ProductName>
                <S.ProductPrice>{formatPrice(price)}</S.ProductPrice>
            </S.ProductInfos>
        </S.Product>
    )
};

export default FeaturedproductCard;