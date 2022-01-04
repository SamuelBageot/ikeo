import { AiOutlineArrowLeft } from 'react-icons/ai';
import * as S from './styles';

const Backlink = ({ children }) => {
    return <S.BackLink to={"/products"}><AiOutlineArrowLeft />{children}</S.BackLink>
};

export default Backlink;