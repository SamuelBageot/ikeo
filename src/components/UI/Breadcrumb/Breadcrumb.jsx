import { useLocation } from 'react-router-dom';
import * as S from './styles';

const Breadcrumb = ({ productName }) => {

    const location = useLocation();
    const urlArr = location.pathname.split("/");

    return (
        <S.Wrapper>
            <S.Breadcrumb>
                <div>
                    {urlArr.map((el, i) => {
                        if (i === urlArr.length - 1) {
                            return <S.Element key={i}> / {productName || el} </S.Element>
                        }
                        return <span key={i}><S.ElementLink to={`/${el}`}>{el === "" ? "home" : ` / ${el}`}</S.ElementLink></span>
                    })}
                </div>
            </S.Breadcrumb>
        </S.Wrapper>
    )
}

export default Breadcrumb;