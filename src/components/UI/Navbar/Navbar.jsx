import { Link } from 'react-router-dom';
import * as S from './styles';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <S.Wrapper>
            <S.Navbar>

                <Link to="/">
                    <S.Logo src="/images/logo.png" />
                </Link>

                <S.Menu>
                    <S.Item>
                        <S.MenuLink to="/" end >Home</S.MenuLink>
                        <S.MenuLink to="/about" end >About</S.MenuLink>
                        <S.MenuLink to="/products" end >Products</S.MenuLink>
                    </S.Item>
                </S.Menu>

                <S.Cart to="/cart" end>
                    <FaShoppingCart fill="var(--color-secondary)" fontSize="22px" />
                    <span>2</span>
                </S.Cart>

            </S.Navbar>
        </S.Wrapper>
    )
};

export default Navbar;