import * as S from './styles';

const HeroBanner = () => {
    return (
        <S.Wrapper>
            <S.HeroBanner>
                <S.Texts>
                    <S.Title>Design Your Comfort Zone</S.Title>
                    <S.Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias ?</S.Paragraph>
                    <S.Btn to="/products">SHOP NOW</S.Btn>
                </S.Texts>
                <S.Images>
                    <img src="/images/bois-3.jpg" alt="" />
                </S.Images>
            </S.HeroBanner>
        </S.Wrapper>
    )
};

export default HeroBanner;